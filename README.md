# AI from the Front Line

Talk deck by Dave Sellick (Sidgrove) — a self-contained HTML presentation on the GenAI narrative in accounting: why it's so loud, why it's inflated, and how to actually use the tools.

21 slides: the brutal narrative → why it's loud and why it's inflated → why it can't deliver (probabilistic by design, sold below cost, not exactly green) → their answer (the ~~agentic~~ asbestos era, hooked on tokens, pre-authorised mistakes) → my answer (a copilot never the pilot, the four ways to use it, the stack, live demo) → recommendations → key takeaways → humans are going nowhere.

## Viewing

Open `ai from the front line.html` in a browser, or serve the folder so the fonts load reliably:

    npx serve .

Navigate with the left / right arrow keys, number keys to jump, `R` to reset. Deep-link straight to a slide with `?slide=N` or `#N` (1-based). Slides are a fixed 1920x1080 canvas that scales to fit the viewport; `Print -> Save as PDF` exports one slide per page (verified — backgrounds, charts and shadows all survive).

All fonts are self-hosted, so the deck renders identically **with no internet connection** — safe for venue wifi.

## Stack

- Single HTML file driven by the `<deck-stage>` web component (`deck-stage.js`)
- Type: Very Vogue (display serif), DM Sans (UI), JetBrains Mono (labels) — all served from `fonts/`
- No build step, no dependencies, no CDN calls

## Assets

`fonts/` holds the **Very Vogue** family (Nicky Laatz) under a commercial licence — **do not redistribute** — and `Images/Quotes - narrative/` holds third-party headline screenshots. This repository is **private**; these files are bundled only so the deck renders. `fonts/web/` holds DM Sans and JetBrains Mono (both SIL OFL, freely redistributable variable woff2s).
