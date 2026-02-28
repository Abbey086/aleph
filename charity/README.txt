# Charity site (static HTML + Tailwind CDN)

## Run locally
- Open `index.html` in your browser
OR
- Use a tiny local server (recommended for video):
  - Python: `python -m http.server 8000` then open http://localhost:8000/charity-site/index.html

## Swap the hero video
Replace: `assets/video/hero.mp4`
Keep the same filename to avoid changing code.

## Loader behavior (video-connected)
- The loader uses the SAME <video> element as the page hero.
- While loading, the video is clipped into a centered rectangle on white.
- When the video can play, we animate the clip-path to full screen and fade the loader.
