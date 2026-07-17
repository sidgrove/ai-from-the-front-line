# AI from the Front Line Revision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the existing 27-slide HTML presentation into a clear, exceptional 20-slide personal keynote whose live demo covers Chat, Cowork, vibe coding, controlled output, and human sign-off.

**Architecture:** Preserve the single-file presentation architecture and `deck-stage.js`. Add a compact editorial layout layer to the existing CSS, then replace the 27 authored `<section class="slide">` elements with 20 revised sections. Verification uses source assertions, headless Chrome printing, Poppler rendering, full-slide visual inspection, and browser-level navigation and asset checks.

**Tech Stack:** HTML5, CSS, vanilla JavaScript web component, local OTF fonts, headless Google Chrome, Poppler, PowerShell.

## Global Constraints

- Keep the main reassurance: **"You're fine."**
- Use the supporting line: **"Although you should never stand still."**
- Preserve Dave's candid, provocative, humorous, sceptical voice.
- Treat the deck as Dave's personal field report, not a neutral research report.
- Preserve Very Vogue, DM Sans, JetBrains Mono, and the existing Sidgrove palette.
- Use serif italics only for highlighted words and emotional turns.
- The live demo covers Chat, Cowork, vibe coding, controlled output, and human sign-off.
- Keep `deck-stage.js` behaviour unchanged.
- Keep one printable 1920x1080 slide per PDF page.
- Add no runtime dependencies or build step.
- Do not invent outcomes, evidence, people, or customer results.
- Use British spelling.
- Maintain readable conference-scale type and high contrast.

---

### Task 1: Establish the editorial layout layer

**Files:**
- Modify: `ai from the front line.html` inside the existing `<style>` block

**Interfaces:**
- Consumes: existing CSS variables and font faces
- Produces: reusable classes for the revised 20-slide markup

- [ ] **Step 1: Record the source baseline**

Run:

```powershell
$html = Get-Content -Raw 'ai from the front line.html'
$count = ([regex]::Matches($html, '<section\s+class="[^"]*slide')).Count
if ($count -ne 27) { throw "Expected 27 source slides, found $count" }
```

Expected: command exits successfully with no output.

- [ ] **Step 2: Add the new editorial CSS primitives**

Append the following before the closing `</style>` tag, using `apply_patch`:

```css
/* Revised editorial keynote layer */
.slide-num {
  font-family: var(--font-mono);
  font-size: 14px;
  letter-spacing: 0.20em;
  color: var(--ink-300);
  font-weight: 600;
}
.slide.ink .slide-num { color: rgba(255,255,255,0.46); }
.claude-cream .slide-num { color: rgba(31,24,21,0.44); }
.eyebrow {
  font-family: var(--font-mono);
  font-size: 15px;
  line-height: 1;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 14px;
}
.eyebrow::before {
  content: '';
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: currentColor;
}
.editorial-rule { height: 1px; background: rgba(30,30,70,0.13); }
.slide.ink .editorial-rule { background: rgba(255,255,255,0.14); }
.headline-wall {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px;
  min-height: 0;
}
.headline-wall figure {
  margin: 0;
  overflow: hidden;
  border-radius: 18px;
  background: #f4f2ec;
  border: 1px solid rgba(255,255,255,0.10);
}
.headline-wall figure:first-child { grid-row: 1 / span 2; }
.headline-wall img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }
.argument-list { display: flex; flex-direction: column; }
.argument-row {
  display: grid;
  grid-template-columns: 140px 1fr 0.85fr;
  gap: 42px;
  align-items: center;
  padding: 28px 0;
  border-top: 1px solid rgba(30,30,70,0.13);
}
.argument-row:last-child { border-bottom: 1px solid rgba(30,30,70,0.13); }
.argument-index { font-family: var(--font-serif); font-style: italic; font-size: 70px; color: var(--periwinkle-500); }
.argument-title { font-family: var(--font-serif); font-size: 44px; line-height: 1.02; letter-spacing: -0.025em; }
.argument-copy { font-size: 22px; line-height: 1.45; color: var(--ink-500); }
.split-editorial { display: grid; grid-template-columns: 1fr 1fr; flex: 1; min-height: 0; }
.split-editorial > div { padding: 56px; display: flex; flex-direction: column; justify-content: space-between; }
.stack-bands { display: grid; grid-template-rows: repeat(3, 1fr); gap: 14px; flex: 1; }
.stack-band { display: grid; grid-template-columns: 260px 1fr 300px; align-items: center; gap: 36px; padding: 24px 34px; border-radius: 20px; }
.verify-scale { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: end; flex: 1; }
.verify-side { padding-top: 34px; border-top: 4px solid currentColor; }
.process-line { display: grid; grid-template-columns: repeat(3, 1fr); gap: 64px; align-items: start; }
.process-step { position: relative; padding-top: 26px; border-top: 2px solid rgba(208,248,176,0.60); }
.demo-journey { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
.demo-step { padding-top: 24px; border-top: 2px solid rgba(217,119,87,0.40); }
.demo-step strong { display: block; font-family: var(--font-serif); font-size: 42px; line-height: 1; font-weight: 400; }
.demo-step p { margin: 14px 0 0; font-size: 20px; line-height: 1.4; color: rgba(31,24,21,0.58); }
.monday-actions { display: grid; grid-template-columns: repeat(3, 1fr); gap: 58px; align-items: start; }
.monday-action { padding-top: 28px; border-top: 3px solid var(--periwinkle-500); }
.monday-action:nth-child(2) { border-top-color: var(--green-600); }
.monday-action:nth-child(3) { border-top-color: #B5741A; }
```

- [ ] **Step 3: Verify the original deck still renders with the additive CSS**

Run headless Chrome against the local HTML and print to a temporary PDF.

Expected: PDF is created and `pdfinfo` reports `Pages: 27`.

- [ ] **Step 4: Commit the reusable styling layer**

```powershell
git add -- 'ai from the front line.html'
git commit -m "style: add editorial keynote layout primitives"
```

### Task 2: Replace the deck with the approved 20-slide narrative

**Files:**
- Modify: `ai from the front line.html` from `<deck-stage width="1920" height="1080">` through `</deck-stage>`

**Interfaces:**
- Consumes: Task 1 editorial classes, existing icons and licensed image assets
- Produces: exactly 20 ordered slide sections with unique `data-label` values

- [ ] **Step 1: Write a failing narrative assertion**

Run before editing:

```powershell
$html = Get-Content -Raw 'ai from the front line.html'
$count = ([regex]::Matches($html, '<section\s+class="[^"]*slide')).Count
$required = @(
  'Although you should never stand still.',
  'This is my view from the ledger.',
  'Chat',
  'Cowork',
  'Vibe coding',
  'Guardrail always'
)
if ($count -eq 20 -and ($required | Where-Object { $html -notmatch [regex]::Escape($_) }).Count -eq 0) {
  throw 'The pre-edit deck unexpectedly already matches the target'
}
```

Expected: command exits successfully because the existing source does not yet match the target.

- [ ] **Step 2: Replace the 27 slide sections with the 20-slide sequence**

Use `apply_patch`. Each authored section must have one of these labels, in this exact order:

```text
01 Cover
02 The call I made
03 How wrong I was
04 Tick Tock
05 The doom story
06 You're fine
07 From the front line
08 What the story misses
09 Even if it were free
10 Variable output
11 Controlled output
12 Where AI belongs
13 The one rule
14 Vibe coding with controls
15 Who becomes advantaged
16 Demo roadmap
17 Live demo
18 Monday actions
19 Closing thesis
20 Stay curious
```

Use the exact audience-facing copy below as the content baseline:

```text
01: AI from the front line. / What I've learned using it for real.
02: I made a call. / We were at the peak of a GenAI hype bubble.
03: ...and I was wrong. / We'd only just got started.
04: The message to accountants is brutal: your clock is ticking.
05: The doom story is everywhere. / AI is coming for the work, and soon.
06: You're fine. / Although you should never stand still.
07: I'm building with this. / This is my view from the ledger. Not a market forecast.
08: What I think the replacement story misses. / Money amplifies the story. Tasks look like jobs from 30,000 feet. Context and accountability live down in the ledger.
09: Even if it were free... / ...and ran on sunshine. One constraint would remain.
10: It produces plausible answers. It does not prove what is correct. / Same prompt, two reasonable answers. Fine for ideas. Not fine as a control.
11: Variable answers versus controlled answers. / GenAI can vary and needs review. Controlled workflows are repeatable, testable, and auditable, but still depend on good rules and data.
12: Put AI above the ledger. Not inside the controls. / GenAI can draft, review, explain, and help build. Tested workflows calculate, post, reconcile, and record.
13: Use AI only where checking the answer is cheaper than producing it. / Easy to verify: use it. Hard to verify and high consequence: add controls or do not delegate it.
14: Vibe coding is still coding. / Shipping code you can't read is posting journals you never checked. / Build with AI. Test the workflow. Monitor the controls.
15: My bet on who wins. / Repetitive, low-context work is exposed. Practitioners who combine systems, judgement, and accountability become more valuable.
16: What I am going to show you. / Chat for thinking. Cowork for shared context. Vibe coding for building. Controlled output for trust.
17: Let's walk through it. / The model helps create the workflow. Code calculates. The output reconciles to source. A human signs off.
18: What I would do on Monday. / Start now. Build next. Guardrail always.
19: I was wrong about the peak. I was not wrong about the profession. / Use AI for speed. Use tested systems for control. Keep judgement and accountability human.
20: Thanks, stay curious. / We've adapted before. We will adapt again.
```

The revised markup must reuse these existing assets:

```text
Images/Headshot normal.jpg
Images/Quotes - narrative/Blomfield.png
Images/Quotes - narrative/Suleyman.png
Images/Quotes - narrative/big four.png
Images/Claude full logo.png
Images/Claude Code.png
Images/claude Cowork.png
```

Do not use the old cards for slides 8, 13, 15, 16, or 18. Use `.argument-list`, `.verify-scale`, `.process-line`, `.demo-journey`, and `.monday-actions` respectively.

- [ ] **Step 3: Run the narrative assertion after editing**

```powershell
$html = Get-Content -Raw 'ai from the front line.html'
$count = ([regex]::Matches($html, '<section\s+class="[^"]*slide')).Count
$required = @(
  'Although you should never stand still.',
  'This is my view from the ledger.',
  'Chat',
  'Cowork',
  'Vibe coding',
  'Guardrail always'
)
if ($count -ne 20) { throw "Expected 20 slides, found $count" }
foreach ($text in $required) {
  if ($html -notmatch [regex]::Escape($text)) { throw "Missing required copy: $text" }
}
```

Expected: command exits successfully with no output.

- [ ] **Step 4: Check prohibited production copy and unsafe claims**

```powershell
$prohibited = @(
  'hold this thought',
  'a talk in its own right',
  'end of deck',
  'numbers.*never',
  'check it once',
  'built to be right',
  'mission critical work uses an API'
)
$html = Get-Content -Raw 'ai from the front line.html'
foreach ($pattern in $prohibited) {
  if ($html -match $pattern) { throw "Prohibited copy remains: $pattern" }
}
```

Expected: command exits successfully with no output.

- [ ] **Step 5: Commit the narrative rebuild**

```powershell
git add -- 'ai from the front line.html'
git commit -m "feat: rebuild deck as a 20-slide field report"
```

### Task 3: Validate the live-demo sequence and conference readability

**Files:**
- Modify: `ai from the front line.html` only if validation identifies issues

**Interfaces:**
- Consumes: the 20-slide deck from Task 2
- Produces: a demo section that clearly covers Chat, Cowork, vibe coding, controlled output, and sign-off

- [ ] **Step 1: Verify the demo roadmap order**

```powershell
$html = Get-Content -Raw 'ai from the front line.html'
$roadmap = [regex]::Match($html, '(?s)data-label="16 Demo roadmap".*?</section>').Value
$positions = @('Chat','Cowork','Vibe coding','Controlled output') | ForEach-Object { $roadmap.IndexOf($_) }
if (($positions | Where-Object { $_ -lt 0 }).Count -gt 0) { throw 'Demo roadmap is missing a stage' }
for ($i = 1; $i -lt $positions.Count; $i++) {
  if ($positions[$i] -le $positions[$i-1]) { throw 'Demo roadmap order is incorrect' }
}
```

Expected: command exits successfully.

- [ ] **Step 2: Verify the live-demo control chain**

```powershell
$html = Get-Content -Raw 'ai from the front line.html'
$demo = [regex]::Match($html, '(?s)data-label="17 Live demo".*?</section>').Value
foreach ($text in @('Code calculates','reconciles to source','human signs off')) {
  if ($demo -notmatch [regex]::Escape($text)) { throw "Live demo is missing: $text" }
}
```

Expected: command exits successfully.

- [ ] **Step 3: Render the 20-page review PDF**

Use headless Chrome with a fresh temporary profile and `--allow-file-access-from-files`.

Expected: `pdfinfo` reports `Pages: 20` and `Page size: 1440 x 810 pts`.

- [ ] **Step 4: Render the PDF to full-size slide PNGs and create a montage**

Use Poppler at 96 DPI and the presentation skill's `create_montage.py`.

Expected: exactly 20 PNG files and one montage image.

- [ ] **Step 5: Inspect every slide individually**

Check every 1920x1080 slide for:

```text
unintended overlap
clipping
unexpected wrapping
body copy below conference-readable size
low contrast
mis-cropped screenshots
inconsistent slide numbers
long serif-italic passages
decorative cards that can be flattened
```

Apply fixes with `apply_patch`, rerender, and repeat until every slide passes.

- [ ] **Step 6: Commit the visual QA fixes**

```powershell
git add -- 'ai from the front line.html'
git commit -m "fix: polish deck after full-slide visual QA"
```

### Task 4: Verify assets, navigation, printing, and repository cleanliness

**Files:**
- Modify: `ai from the front line.html` or `deck-stage.js` only if a verified defect requires it

**Interfaces:**
- Consumes: final 20-slide HTML deck
- Produces: verified, clean repository state

- [ ] **Step 1: Verify local assets referenced by the HTML exist**

```powershell
$html = Get-Content -Raw 'ai from the front line.html'
$srcs = [regex]::Matches($html, '<img[^>]+src="([^"]+)"') | ForEach-Object {
  [System.Uri]::UnescapeDataString($_.Groups[1].Value)
}
foreach ($src in $srcs) {
  if ($src -match '^https?://') { continue }
  if (-not (Test-Path -LiteralPath $src)) { throw "Missing image: $src" }
}
```

Expected: command exits successfully.

- [ ] **Step 2: Verify navigation behaviour in a browser**

At 1920x1080, confirm:

```text
initial slide index is 1
ArrowRight advances to 2
ArrowLeft returns to 1
End reaches 20
Home returns to 1
R returns to 1
the overlay reports a total of 20
```

- [ ] **Step 3: Verify source and diff quality**

Run:

```powershell
git diff --check
git status --short --branch
git log -5 --oneline --decorate
```

Expected: no whitespace errors; only intended committed presentation and planning changes; branch ahead of `origin/main` by the new local commits.

- [ ] **Step 4: Perform the final no-regression render**

Print the final HTML to PDF one last time and confirm exactly 20 pages.

Expected: no Chrome errors, missing assets, blank pages, or page-size mismatches.

- [ ] **Step 5: Report completion**

Provide the absolute clickable path to `ai from the front line.html`, summarize the narrative and visual changes, mention the 20-slide render and navigation checks, and state that the live demo now covers Chat, Cowork, vibe coding, controlled output, and human sign-off.
