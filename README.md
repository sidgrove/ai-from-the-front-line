# AI from the Front Line

Talk deck by Dave Sellick (Sidgrove) — a self-contained HTML presentation on the GenAI narrative in accounting: why it's so loud, why it's inflated, and how to actually use the tools.

44 slides in three acts, each named by a quiet tag in the top-left corner and opened by a divider slide: **The Narrative** (Tick Tock, the headlines, why so much hype, side note: why listen to me, the usage meter) → **The reality** (what actually is it: a very advanced autocomplete, probabilistic by design, why is that a problem, same question two answers, just use it, it isn't intelligent, better than a human?, and added to that, sold below cost, not exactly green, with sourced numbers) → **How to use it** (the pitch: the ~~agentic~~ asbestos era, hooked on tokens, pre-authorised mistakes, it's toxic; so what's a better approach; my answer: a copilot never the pilot; here's how I use GenAI: daily drivers (chat / vibe coding; spotlight on Claude Code: Sidgrove Intelligence (app-shell mock, what it does, month end, the hub, a live screenshot) / slides / websites / brand assets, each screenshot page with a drop-in frame; AI note takers / other tools) then sparingly, with caution (spreadsheets / Claude Cowork); do and don't) → key takeaways → thank you. No live demo; the deep-dive pages carry the tooling story. Dave does the talking: slides are one headline and one visual each.

## Adding screenshots

Drop PNGs into `Images/screens/` with kebab-case names and no spaces (so the `src` needs no `%20`). Then paste the commented **TEMPLATE · SCREENSHOT SLIDE** block near the bottom of the HTML wherever the slide belongs, uncomment it, and point the `<img>` at the file: `<figure class="shot"><img src="Images/screens/foo.png" alt="…"><figcaption>Where it's from · when</figcaption></figure>`. The `.shot` frame gives any image the deck's card treatment; add `window` for a fake title bar or `tilt` for the receipt-style lean. Page chips renumber themselves, so slides can be inserted anywhere. Vercel caches `Images/` for a year, so if you replace a screenshot, give it a new filename rather than overwriting.

## Viewing

Live at **https://ai-from-the-front-line.vercel.app** — pushes to `main` auto-deploy (Vercel project `sidgrove/ai-from-the-front-line`).

Locally, open `ai from the front line.html` in a browser, or serve the folder so the fonts load reliably:

    npx serve .

Navigate with the left / right arrow keys, number keys to jump, `R` to reset. Deep-link straight to a slide with `?slide=N` or `#N` (1-based). Slides are a fixed 1920x1080 canvas that scales to fit the viewport; `Print -> Save as PDF` exports one slide per page (verified — backgrounds, charts and shadows all survive).

**Speaker notes.** Press `N` to toggle the notes panel (talking points, the source for every number on the slide, and the one-line answer if someone comes at it). For a presenter screen, open the deck a second time in the same browser with `?notes` on the URL: that window starts with the panel open and follows the projector window as you move through the slides. Notes live in the `#speaker-notes` JSON block near the bottom of the HTML, one entry per slide in order.

All fonts are self-hosted, so the deck renders identically **with no internet connection** — safe for venue wifi.

## Stack

- Single HTML file driven by the `<deck-stage>` web component (`deck-stage.js`)
- Type: Very Vogue (display serif), DM Sans (UI), JetBrains Mono (labels) — all served from `fonts/`
- No build step, no dependencies, no CDN calls

## Content plan

`SLIDES.md` is the editable text of every slide, one section per slide, numbered to match the deck. Edit it and say **"pull from plan"** for the changes to be applied to the HTML; say **"push to plan"** to regenerate it from the current deck. Details at the top of the file.

## Assets

`Images/` has **one folder per slide**, named `NN Slide title` to match the slide order (e.g. `03 The headlines/`), plus `Images/shared/` for assets used across slides (the Claude logo, headshot, spare logo files). Drop a slide's images into its numbered folder; in the HTML, URL-encode spaces in the `src` (`Images/05%20Why%20listen/setup-wide.jpg`). The folder set is kept in sync with the deck — when slides are added, removed, or reordered, the folders are renumbered to match.

`fonts/` holds the **Very Vogue** family (Nicky Laatz) under a commercial licence — **do not redistribute** — and `Images/03 The headlines/` holds third-party headline screenshots. This repository is **private**; these files are bundled only so the deck renders. `fonts/web/` holds DM Sans and JetBrains Mono (both SIL OFL, freely redistributable variable woff2s).
