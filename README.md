# MClub Fitness & Spa

Next.js website for MClub in Sfax, with gym, pool, spa, classes, coaching, kids, events, cantine and membership pages.

## Run locally

```sh
npm ci
npm run dev
```

Open the URL printed by Next.js. To use another port: `npm run dev -- --port 3009`.

## Verify

```sh
npm run typecheck
npm run build
npx playwright install chromium webkit
npm run test:responsive
```

The browser suite checks 320px phones, phone portrait/landscape, tablet portrait/landscape, desktop and WebKit phone layouts. It covers overflow, header spacing, mobile navigation, forms, class filters, FAQs and video playback. It starts a local server on port 3100; set `MCLUB_TEST_URL` to test an existing server instead.

`MCLUB_BUILD_DIR` optionally selects an isolated Next.js build directory when a separate dev server is running.

## Media

The original photos and video content are preserved. `public/optimized` contains full-length, compressed H.264 video variants for desktop and mobile. Videos load near the viewport, play when visible, and pause off-screen. Reduced-motion and data-saving preferences use the existing poster images.

Original video files, research, caches and logs remain local and are excluded from Git. Committed optimized videos and the generated `src/components/video-sources.json` make a fresh checkout runnable without those originals.

To regenerate media after adding originals at their `/public/mclub/...` paths:

```sh
npm run media:optimize
```

The optimizer deduplicates identical source clips, preserves duration and aspect ratio, generates fast-start MP4 files, and caches completed work locally. It does not overwrite originals. Background clips are muted and their web copies omit audio.

## Booking delivery

Forms currently collect and review details locally. They do not send requests or confirm bookings. Reception contact links work; Resend integration is planned and has intentionally not been connected yet.
