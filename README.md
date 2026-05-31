# Vibe Coding from the Front Line

Talk deck by Dave Sellick (Sidgrove) — a self-contained HTML presentation on where GenAI actually fits in accounting, and where it doesn't.

## Viewing

Open `ai from the front line.html` in a browser, or serve the folder so the fonts load reliably:

    npx serve .

Navigate with the left / right arrow keys, number keys to jump, `R` to reset. Slides are a fixed 1920x1080 canvas that scales to fit the viewport; `Print -> Save as PDF` exports one slide per page.

## Stack

- Single HTML file driven by the `<deck-stage>` web component (`deck-stage.js`)
- Type: Very Vogue (display serif), DM Sans (UI), JetBrains Mono (labels)
- No build step, no dependencies

## Assets — do not redistribute

`fonts/` holds the **Very Vogue** family (Nicky Laatz) under a commercial licence, and `Images/Quotes - narrative/` holds third-party headline screenshots. This repository is **private**; these files are bundled only so the deck renders, not for redistribution.
