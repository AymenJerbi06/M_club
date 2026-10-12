import { createHash } from "node:crypto";
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, statSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);
const ffmpeg = require("ffmpeg-static");
const ts = require("typescript");
const root = process.cwd();
const publicRoot = path.join(root, "public");
const cacheRoot = path.join(root, ".media-cache");
const outputRoot = path.join(publicRoot, "optimized");
const cacheFile = path.join(cacheRoot, "index.json");
const profiles = {
  desktop: { edge: 1920, crf: 23, fps: 30 },
  mobile: { edge: 1280, crf: 26, fps: 24 },
};

function inside(directory, relative) {
  const resolved = path.resolve(directory, relative);
  if (!resolved.startsWith(`${directory}${path.sep}`)) throw new Error(`Path outside ${directory}: ${relative}`);
  return resolved;
}

function sourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? sourceFiles(file) : /\.tsx?$/.test(file) ? [file] : [];
  });
}

const urls = new Set();
for (const file of sourceFiles(path.join(root, "src"))) {
  const source = ts.createSourceFile(file, readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true);
  const visit = node => {
    if (ts.isStringLiteralLike(node) && node.text.startsWith("/mclub/") && node.text.endsWith(".mp4")) urls.add(node.text);
    ts.forEachChild(node, visit);
  };
  visit(source);
}

mkdirSync(cacheRoot, { recursive: true });
mkdirSync(outputRoot, { recursive: true });
const cache = existsSync(cacheFile) ? JSON.parse(readFileSync(cacheFile, "utf8")) : {};
const groups = new Map();
for (const url of [...urls].sort()) {
  const input = inside(publicRoot, url.slice(1));
  if (!existsSync(input)) throw new Error(`Missing original video: ${url}`);
  const key = createHash("sha256").update(readFileSync(input)).update(JSON.stringify(profiles)).digest("hex").slice(0, 20);
  if (!groups.has(key)) groups.set(key, { key, input, urls: [] });
  groups.get(key).urls.push(url);
}

function encode(input, output, profile) {
  return new Promise((resolve, reject) => {
    const process = spawn(ffmpeg, [
      "-hide_banner", "-loglevel", "error", "-y", "-i", input,
      "-map", "0:v:0", "-an", "-vf",
      `scale=w='min(${profile.edge},iw)':h='min(${profile.edge},ih)':force_original_aspect_ratio=decrease:force_divisible_by=2,setsar=1`,
      "-r", String(profile.fps), "-c:v", "libx264", "-preset", "fast", "-crf", String(profile.crf),
      "-threads", "2", "-pix_fmt", "yuv420p", "-movflags", "+faststart", output,
    ], { windowsHide: true, stdio: ["ignore", "ignore", "pipe"] });
    let errors = "";
    process.stderr.on("data", chunk => { errors += chunk; });
    process.on("error", reject);
    process.on("exit", code => code === 0 ? resolve() : reject(new Error(errors || `FFmpeg exited ${code}`)));
  });
}

let completed = 0;
const manifest = {};
for (const group of groups.values()) {
  const cached = cache[group.key];
  let variants = cached?.desktop && cached?.mobile && Object.values(cached).every(url => existsSync(inside(publicRoot, url.slice(1)))) ? cached : undefined;
  if (!variants) {
    variants = {};
    for (const [name, profile] of Object.entries(profiles)) {
      const temp = inside(cacheRoot, `${group.key}-${name}.mp4`);
      await encode(group.input, temp, profile);
      const hash = createHash("sha256").update(readFileSync(temp)).digest("hex").slice(0, 20);
      const filename = `${hash}-${name}.mp4`;
      renameSync(temp, inside(outputRoot, filename));
      variants[name] = `/optimized/${filename}`;
    }
    cache[group.key] = variants;
    writeFileSync(cacheFile, `${JSON.stringify(cache, null, 2)}\n`);
  }
  for (const url of group.urls) manifest[url] = variants;
  console.log(`Optimized ${++completed}/${groups.size}: ${path.basename(group.input)}`);
}

writeFileSync(path.join(root, "src", "components", "video-sources.json"), `${JSON.stringify(manifest, null, 2)}\n`);
const originalBytes = [...urls].reduce((sum, url) => sum + statSync(inside(publicRoot, url.slice(1))).size, 0);
const outputs = new Set(Object.values(manifest).flatMap(value => Object.values(value)));
const optimizedBytes = [...outputs].reduce((sum, url) => sum + statSync(inside(publicRoot, url.slice(1))).size, 0);
console.log(JSON.stringify({ originalFiles: urls.size, uniqueVideos: groups.size, originalMB: Math.round(originalBytes / 1048576), optimizedMB: Math.round(optimizedBytes / 1048576) }));
