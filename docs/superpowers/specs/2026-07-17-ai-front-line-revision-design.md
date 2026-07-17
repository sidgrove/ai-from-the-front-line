# AI from the Front Line: Revision Design

## Objective

Revise the existing HTML presentation into a world-class, conference-scale keynote that is unmistakably Dave Sellick's personal field report from day-to-day finance and accounting work.

Communication job:

> By the end, accountants and practice leaders should feel neither doomed nor complacent, because Dave's experience is that GenAI is a powerful probabilistic accelerator while trusted financial work still depends on controlled systems, accountable people, and professional judgement.

The presentation is an opinionated first-person talk, not a neutral industry report. Strong views should remain strong. Where a claim is Dave's interpretation, the language should own that perspective directly through phrases such as "my view", "from where I sit", "what I see from the ledger", and "my bet".

## Audience and physical setting

The audience is accountants, finance professionals, and practice leaders watching a 16:9 screen in a conference or event room. Dave is speaking live under stage lighting. Copy must therefore work at distance, reward a spoken delivery, and avoid microtext that only works on a laptop.

## Approved constraints

- Keep the main reassurance: **"You're fine."**
- Use the supporting line: **"Although you should never stand still."**
- Preserve Dave's candid, provocative, humorous, sceptical voice.
- Preserve the personal opening and admission that his earlier call was wrong.
- Preserve Very Vogue as the display face, DM Sans for supporting copy, and JetBrains Mono for short labels.
- Use serif italics for highlighted words and emotional turns, not for long passages that must be read at distance.
- Preserve the existing navy, paper, lavender, green, and Claude coral identity, while assigning each colour a clearer narrative role.
- Keep the source as a self-contained HTML presentation using `deck-stage.js`.
- Do not invent factual results, customer evidence, or quantified outcomes.

## Approaches considered

### A. Surgical polish of all 27 slides

Retain the sequence and slide count, improve wording, spacing, and typography.

Benefits: lowest disruption and preserves every current speaking beat.

Trade-off: repetition remains, the strongest idea still arrives late, and the middle continues to feel like a sequence of product cards.

### B. Editorial compression to 20 slides (selected)

Preserve the personal beats that benefit from a pause, merge genuinely redundant evidence and product slides, move the first-person lens earlier, and rebuild the middle around one clear distinction: variable output versus controlled work.

Benefits: clearer story, stronger pacing, more visual variety, and enough room for humour and live delivery.

Trade-off: some secondary arguments, particularly the economics and environmental detour, are removed or absorbed into a single transition.

### C. Radical 16-slide rebuild

Replace most of the existing structure with a highly cinematic sequence centred on a real case study and live demonstration.

Benefits: highest potential impact and shortest runtime.

Trade-off: changes the talk's personality substantially and would require new evidence or assets that are not currently in the repository.

## Selected narrative arc

The deck will become a 20-slide personal field report.

1. **Cover:** AI from the front line. Subtitle reframed as first-hand experience rather than universal instruction.
2. **The call:** Dave called the peak of the hype.
3. **The correction:** Dave was wrong about the pace. The personal admission remains a separate dramatic beat.
4. **The doom story:** A simplified, more legible "Accountant detected" satire.
5. **The evidence wall:** Merge the two headline slides into one curated view of the prevailing narrative.
6. **The reassurance:** "You're fine. Although you should never stand still."
7. **The lens:** Move the building-from-the-front-line statement forward. Establish that the remaining talk is Dave's experience, not a market forecast.
8. **What the replacement story misses:** Combine incentives, the 30,000-foot view, client context, and accountability into one first-person argument.
9. **The transition:** Even if AI became free and ran on sunshine, one constraint would remain.
10. **Variable output:** Show the same prompt producing two plausible answers. Describe variation honestly rather than claiming both answers prove mistakes.
11. **Controlled output:** Contrast variable, plausible output with repeatable, testable, auditable workflows. Avoid implying that deterministic automatically means correct.
12. **Where AI belongs:** Combine the proposition, existing foundations, and "late and it guesses" material. Put GenAI above the ledger rather than inside the controls.
13. **The practical rule:** Keep the verification-cost heuristic, replacing the words-versus-numbers binary with easy-to-verify versus hard-to-verify/high-consequence work.
14. **Vibe coding with controls:** Merge the risk and resolution. Build with AI, test the workflow, and monitor the controls.
15. **Who becomes advantaged:** Reframe exposure around disciplined practitioners and shallow workflows, rather than a vague "hollow" vendor comparison.
16. **Demo roadmap:** Replace the standalone product inventory with one minimal sequence showing what the live demonstration will cover: Chat for thinking, Cowork for shared context, vibe coding for building, then controlled output and human sign-off.
17. **Live demo:** The demonstration itself covers Chat, Cowork, vibe coding, and the move from GenAI-assisted building to controlled finance output. The deck slide acts as a clear start and return point, while making the architecture explicit: the model writes or orchestrates the workflow, controlled code calculates, source data reconciles, and a human approves.
18. **What Dave would do on Monday:** Replace the dense recommendation cards with three actions: Start now, Build next, Guardrail always.
19. **Closing thesis:** Resolve the opening with a short, personal conclusion.
20. **Contact/Q&A:** A quiet holding slide after the spoken ending, with no "end of deck" production language.

## Copy principles

- Own opinion explicitly instead of presenting every judgement as a universal fact.
- Keep clipped fragments for a few important beats, not as the default rhythm.
- Remove visible production scaffolding such as "hold this thought", "a talk in its own right", and "end of deck".
- Reduce leading ellipses and repeated uses of "actually".
- Use **GenAI** for generative models and **AI** only when the broader term is intended.
- Use British spelling, including **judgement**, **optimised**, and **prioritise**.
- Hyphenate **mission-critical**.
- Avoid absolute claims that the deck later contradicts, especially "numbers never", "built to be right", and "check it once".
- Keep the strongest Dave lines where technically honest, including "I'm looking from the ledger", "Guessing is a brilliant trick", the verification-cost rule, and the unchecked-journal analogy.

## Visual direction

The existing design is the brand reference. The revision will feel like a live editorial keynote rather than a SaaS landing page.

### Preserve

- Oversized Very Vogue display typography.
- Navy and paper alternation for tension and release.
- Lavender as the core Sidgrove accent.
- Green as the resolution, verification, and "safe with controls" accent.
- Claude coral only in the demo roadmap and live-demo section.
- Occasional humour and interface simulation when the interface itself is evidence.

### Change

- Reduce repeated rounded cards, pills, and identical grids.
- Use flatter, asymmetric compositions and stronger scale changes.
- Reserve interface frames for the redundancy satire, model-output example, Claude workflow, and live demo.
- Enlarge essential screenshots and remove unreadable supporting microcopy.
- Replace most 3D emoji stickers with typography or the existing coherent icon family. One comic emoji may remain on the reassurance slide if it strengthens the beat.
- Remove the persistent total slide denominator, or make navigation substantially quieter.
- Use page-level colour deliberately: navy for tension and conviction, paper for explanation, Claude cream for the working-stack section.
- Increase the minimum size and contrast of audience-facing body copy.
- Keep long sentences in the sans face; use display italics only for a few highlighted words.

## Interaction and implementation boundaries

- Preserve keyboard, touch, reset, print, and scaling behaviour in `deck-stage.js`.
- Make the presentation remain printable to one 1920x1080 slide per PDF page.
- Avoid new runtime dependencies and external build steps.
- Reuse existing licensed fonts and image assets.
- New visual impact will come from editing, scale, pacing, and composition. No new generated imagery is required because the deck's subject is demonstrated through its existing headlines, interfaces, and live-workflow artefacts.

## Verification

- Render the complete revised deck to PDF in headless Chrome.
- Confirm exactly 20 pages.
- Render every page to a full-size PNG.
- Inspect the contact sheet for narrative flow and visual rhythm.
- Inspect every slide individually for clipping, overlap, wrapping, contrast, and legibility.
- Check that all images load and all local fonts finish loading.
- Check slide bounds and DOM overflow at 1920x1080.
- Verify keyboard navigation, Home, End, reset, and print behaviour.
- Run `git diff --check` and inspect the final diff for accidental unrelated changes.

## Success criteria

- The audience understands by slide 8 that this is Dave's personal field report and can state his core distinction in one sentence.
- The main argument arrives earlier and progresses without reversing position.
- No slide performs the same narrative job as its neighbour unless the repetition is a deliberate dramatic reveal.
- The deck reads clearly at conference distance.
- The visual system feels recognisably Sidgrove but less card-heavy, less template-like, and more memorable.
- The final spoken line resolves the opening admission and leaves the audience with a practical operating principle.
