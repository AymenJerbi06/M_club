"use client";

import { useEffect, useRef, useState } from "react";
import videoSources from "./video-sources.json";

type VideoSources = { desktop: string; mobile: string };
const sources: Record<string, VideoSources> = videoSources;

export default function ResponsiveVideo({ src, poster, className, label, priority = false }: {
  src: string;
  poster?: string;
  className?: string;
  label?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const playback = useRef({ visible: false, permitted: true });
  const [mediaSrc, setMediaSrc] = useState<string>();

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = matchMedia("(max-width: 1024px)").matches || connection?.effectiveType === "3g";
    const selectedSource = sources[src]?.[mobile ? "mobile" : "desktop"] ?? src;
    let visible = false;
    let nearby = priority;
    let loaded = false;

    const permitted = () => !reducedMotion.matches && !connection?.saveData;
    const syncPlayback = () => {
      playback.current = { visible, permitted: permitted() };
      if (permitted() && visible && !document.hidden) {
        if (video.getAttribute("src")) void video.play().catch(() => {});
      } else {
        video.pause();
      }
    };
    const loadWhenNeeded = () => {
      if (!loaded && nearby && permitted()) {
        loaded = true;
        setMediaSrc(selectedSource);
      }
      syncPlayback();
    };

    const loadingObserver = new IntersectionObserver(([entry]) => {
      nearby = entry.isIntersecting;
      loadWhenNeeded();
    }, { rootMargin: "160px" });
    const playbackObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.1;
      syncPlayback();
    }, { threshold: [0, 0.1] });

    loadingObserver.observe(video);
    playbackObserver.observe(video);
    video.addEventListener("loadeddata", syncPlayback);
    video.addEventListener("canplay", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);
    reducedMotion.addEventListener("change", loadWhenNeeded);
    loadWhenNeeded();

    return () => {
      loadingObserver.disconnect();
      playbackObserver.disconnect();
      video.removeEventListener("loadeddata", syncPlayback);
      video.removeEventListener("canplay", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
      reducedMotion.removeEventListener("change", loadWhenNeeded);
      video.pause();
    };
  }, [src, priority]);

  useEffect(() => {
    if (mediaSrc && playback.current.visible && playback.current.permitted && !document.hidden) {
      void ref.current?.play().catch(() => {});
    }
  }, [mediaSrc]);

  return (
    <video
      ref={ref}
      className={className}
      src={mediaSrc}
      poster={poster}
      muted
      loop
      playsInline
      preload={priority ? "metadata" : "none"}
      aria-label={label}
      data-video-original={src}
    />
  );
}
