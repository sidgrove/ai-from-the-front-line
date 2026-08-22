# Slide plan · AI from the front line

The editable text of every slide, one section per slide, numbered to match the
deck (and the `Images/NN Title/` folders, and the `?review` badge).

**How to use this file**
- Edit any text here, save, commit and push (or just tell Claude what you changed),
  then say **"pull from plan"** — Claude diffs this file against the deck and applies
  your changes to the HTML.
- Say **"push to plan"** — Claude regenerates this file from the current deck so it
  matches what's live (do this after slides have been edited directly).
- `*italics*` marks the serif accent (`<em>`) inside a heading or line — keep the
  asterisks around whichever words should get the accent treatment.
- Keep the `## NN · Title` headings intact; they're how Claude maps a section to a
  slide. Layout, mocks and logos aren't described here — ask for those changes in chat.

---

## 01 · Cover

- **Title:** AI from the *front line.*
- **Prompt bar:** ...this is what you actually *need to know.*
- **Chips:** 01 The hype. · 02 The reality. · 03 What works.
- **Byline:** Dave Sellick — Founder, Sidgrove

## 02 · Tick Tock

- **Section tag:** Why the noise
- **Headline:** Tick *Tock.*
- **Sub:** ...we're doomed, right?
- **Mock (redundancy pop-up):**
  - Banner: ⚠ Redundancy Notice · Confidential ⚠
  - Title: Accountant Detected.
  - Label: Role Assessment: Complete
  - Rows: Data entry — AUTOMATABLE · Reconciliation — AUTOMATABLE · Tax preparation — AUTOMATABLE · Forecasting — AUTOMATABLE · "But I'm good with people" — lol
  - Verdict: Verdict: Fully. Automatable.
  - Quote: Microsoft's AI boss says 18 months. **He named accounting.**
  - Buttons: I Accept My Redundancy / this won't apply to me

## 03 · The headlines

- **Section tag:** Why the noise
- **Headline:** The *headlines.*
- **Sub:** You've seen these. *You're next, apparently.*
- **Press cards:**
  1. The Telegraph — Tom Blomfield — Monzo founder (`Blomfield.png`)
  2. Fortune — Mustafa Suleyman — CEO, Microsoft AI (`Suleyman.png`)
  3. TheStreet — The Big Four — cutting benefits and hiring (`big four.png`)

## 04 · Why so strong

- **Section tag:** Why the noise
- **Headline:** I don't buy it. So why the *shouting?*
- **Cards:**
  1. **The GenAI mirage** — It looks great *from afar.* — The demo runs itself. Day to day, it needs babysitting.
  2. **The money** — The hype pays *their bills.* — The labs lose billions. Big Tech has spent hundreds of billions. The story has to hold.
  3. **The sunk cost** — They're in *too deep.* — Big Tech over-hired, then over-built. "AI" is a better story than "we got it wrong".

## 05 · The meter

- **Section tag:** Why the noise
- **Headline:** If full autonomy worked, *I'd be using it.*
- **Sub:** Nothing to sell you. *I just use it, a lot.*
- **Mock (usage card, "a normal week"):**
  - Frontier models, hands on — ~12 hrs / day
  - Claude Max subscription — limit hit · weekly
  - Tools I built, one key each — 60
  - Code shipped — daily
  - Fully autonomous, unreviewed — 0 · not worth the risk yet
  - Footer: nothing to sell · no product, course or fund · not sponsored

## 06 · Why listen

- **Section tag:** Side note
- **Headline:** Why listen to *me?*
- **Photo tag:** My desk, most days
- **Claims:**
  1. I try *all of it.* — This is my everyday desk. I try everything early, and I bin most of it.
  2. If I've stopped *doing it,* — there's usually a reason. Ask me which.
- **Permission card:** So, officially — You don't have to keep up with all of it. *I'll tell you what stuck.*

## 07 · Can it deliver? (divider)

- **Headline:** So, can it *deliver?*
- **Prompt bar:** It's everywhere. *Can it actually do the work?*

## 08 · Probabilistic

- **Section tag:** Can it deliver
- **Headline:** It's probabilistic. *By design.*
- **Pipeline:** "What should I prioritise?" → [ 3923 · 1129 · 358 · … ] → Transformer → a *plausible* next token
- **Popover:** Candidates / p(next): cashflow 34% · the VAT return 22% · a holiday 1.8% — Ranked by plausibility. Nothing is checked.
- **Sub:** An extremely smart autocomplete. *Confidently probably correct.*

## 09 · Two answers

- **Section tag:** Can it deliver
- **Headline:** Same question. *Two answers.*
- **Mock (two Claude runs, same prompt "Add up this quarter's invoices for me." · acme · Q1 · 214 PDFs):**
  - Run A (41s): Done. 206 fall in Q1, total *£128,400*. 8 look like next quarter.
  - Run B (38s): Done. 209 fall in Q1, total *£129,150*. 5 look like next quarter.
  - Delta sticker: £750 apart
- **Sub:** Both sound confident. *They can't both be right.*

## 10 · The economics

- **Section tag:** Can it deliver
- **Headline:** Sold below *cost.*
- **Sub:** The heavy seats are subsidised, mine included. To claw it back they don't raise the price. *They shrink the limit.*
- **Mock (receipt · GenAI Ltd · a heavy seat):**
  - What you pay — flat fee
  - What you cost them — more than that
  - Who covers the gap — investors, for now
  - How they get it back — shrink the limit
  - Footer: valid until: they need it back

## 11 · The environment

- **Section tag:** Can it deliver
- **Headline:** And it's not exactly *green.*
- **Stats:**
  1. *×2* — Data-centre electricity by 2030. *AI is the main reason.* — IEA, Energy and AI (2025): 415 TWh in 2024, ~945 TWh in 2030.
  2. *+37%* — Google's electricity use, in one year. Their words: *"accelerating faster than the grid is decarbonizing".* — Google 2026 Environmental Report: electricity demand up 37% in 2025.

## 12 · How to use it (divider)

- **Headline:** So how should we *use* it?
- **Prompt bar:** It's brilliant. How do I use it *without handing it the keys?*

## 13 · Asbestos era

- **Section tag:** How to use it *· the pitch*
- **Headline:** The ~~agentic~~ *asbestos* era.
- **Sub:** We're embedding it everywhere today. *We'll spend years ripping it out.*

## 14 · Hooked

- **Section tag:** How to use it *· the pitch*
- **Headline:** They want you *hooked.*
- **Sub:** The flat plan gets you in. *The agent bills you by the token.*
- **Mock (⬢ AgentSuite Pro · Autopilot on):**
  - Month-end close — 82%
  - Tokens remaining — 41k of 3.0M
  - Alert: ⚠ Out of tokens. Your close is paused at 82%.
  - Button: Top up · £299
  - Fine print: Topping up switches on auto-top-up · pricing subject to change

## 15 · Pre-authorised mistakes

- **Section tag:** How to use it *· the pitch*
- **Headline:** Pre-authorised *mistakes.*
- **Sub:** It improvises the steps, *then marks its own homework.*
- **Mock (permission dialog · "Agent" wants to run your month-end · Full autonomy · no review):**
  - Fetch the invoices — Its plan, each run
  - Match & reconcile — Its call, each run
  - Post the journals — Live, no undo
  - Decide it's all correct — Marks its own work
  - Note: By continuing, you accept **mistakes that haven't happened yet.**
  - Buttons: Approve future mistakes / review it yourself instead (slower)

## 16 · Copilot, never the pilot

- **Section tag:** How to use it *· my answer*
- **Headline:** A copilot. *Never the pilot.*
- **Sub:** Don't put it in the process. *Have it write the tools that run the process.* Code does the same thing every run.
- **Flow:** Claude (the copilot) → writes the code, once / drafts and flags → Fetch invoices (code) → Match (code) → Report (code) → You (exceptions, sign-off)

## 17 · Recommend

- **Section tag:** How to use it *· my answer*
- **Headline:** What I *actually* recommend.
- **Column 1 — 👋 For most people — Start in *chat.***
  - Use claude.ai for *thinking.*
  - Try Claude for Excel. *Check its work.*
  - Talk to it. *Dictation beats typing.*
  - Put it *one keypress* away.
  - Warning: Client data? Only on a work plan with a data agreement. Personal plans train by default, and a toggle isn't a contract.
- **Column 2 — 🏗️ If you build things, or pay someone who does — Build with *Code.***
  - Build with Claude Code, *daily.*
  - *Deterministic* core. GenAI at the edges.
  - A *human* signs off on anything that posts.
  - Warning: Claude Cowork is where the hype is thickest right now. Use it on documents if you like. Keep it off the close.

## 18 · Five ways

- **Section tag:** How to use it *· five ways*
- **Headline:** Five ways to *use it.*
- **Cards (name — verdict pill — line):**
  1. Chat. — Use daily — Ask, draft, think. You drive.
  2. In your apps. — Sparingly — AI inside Excel, Xero, the inbox. Check its work.
  3. Agents. — Last resort — A whole job, unwatched. Keep it off the close.
  4. Vibe coding. — Use to build — You describe, it codes. You test what it built.
  5. The rest. — Small wins — Notetakers and dictation. Small, useful, every day.
- **Footnote:** Names as of August 2026. They rename faster than they ship.

## 19 · Chat

- **Section tag:** How to use it *· five ways*
- **Headline:** Chat. *The daily driver.* — verdict: Use daily
- **Mock (claude.ai · new chat):**
  - User: How do I explain this VAT position to a nervous client?
  - AI: Plainly: nothing is owed today. Three ways to say it, **calmest first…**
  - Flag: ⚠ Near-expert, not expert. Verify anything that matters.
  - Input: Ask anything… · One keypress
- **The rule:** Talk to it like a colleague. *Check it like a junior.*
- **What I use:** Claude (claude.ai · the one I open first — Daily driver) · Gemini (Better with long documents, images and PDFs.)
- **Also out there · check where the data goes:** ChatGPT · Microsoft Copilot · Perplexity · Mistral · DeepSeek (China-hosted)

## 20 · In apps

- **Section tag:** How to use it *· five ways*
- **Headline:** In your apps. *Check everything.* — verdict: Sparingly
- **Mock (creditors.xlsx · Claude for Excel):**
  - Rows: Stationery Ltd £84.20 20% ✓ · Hosting GmbH £220.00 RC ✓ · Deel Inc £1,240.00 20% · reverse charge?
  - Flag: ⚠ It queried 1 of 38. You answer it. The other 37 still get your eyes.
- **The stat:** Best system tested: *12%* at fixing errors in real workbooks. 35% at whole jobs. — SpreadsheetBench 2, June 2026
- **What I use:** Claude for Excel (Reads the whole workbook. On every paid plan. — With care) · Microsoft 365 Copilot (Edit with Copilot in Excel, if you're licensed.) · Xero + Claude (Since Xerocon, Claude can read the ledger. I let it read, not post.)
- **Also out there:** Xero JAX (beta) · Gemini in Sheets · Intuit Assist · Sage Copilot · Notion AI

## 21 · Agents

- **Section tag:** How to use it *· five ways*
- **Headline:** Agents. *The last resort.* — verdict: Last resort
- **Mock (acme · month-end agent · autopilot on):**
  - ✓ Pulled 214 invoices
  - ✓ Matched 196 of them
  - ⚠ Matched 18 differently to last run
  - ✗ Posted the same accrual twice
  - Halt: Paused. Needs a human. · Step 4 of 9
- **The stat:** Given a whole job to do unwatched, the best agents *still fail most of the time.*
- **What I use:** Claude Cowork (The one I trust most. I still keep it away from the ledger. — Watching)
- **Also out there:** ChatGPT Work · Gemini Spark · Copilot agents · Basis
- **Note:** The vendors say "a human reviews it". Reviewing an agent means redoing the job. *Reviewing a tool's exceptions doesn't.*

## 22 · Vibe coding

- **Section tag:** How to use it *· five ways*
- **Headline:** Vibe coding. *Where it shines.* — verdict: Use to build
- **Mock (terminal · recon-tool · built with Claude Code):**
  - ❯ claude "build me a reconciliation tool"
  - ✓ Built. 48 checks pass on last year's numbers.
  - ❯ recon-tool --client acme --period Q1
  - ✓ 214 matched · code, not AI · same answer every run
  - ⚠ 3 exceptions flagged · over to you
- **The point:** GenAI is probabilistic. Code isn't. *Test it once and it stays tested.*
- **What I use:** Claude Code (An agent too, but nothing ships until I've read it. Built this deck. — The one) · Codex in ChatGPT (OpenAI's coder. I use it to review Claude's work.)
- **Also out there:** Cursor · GitHub Copilot · Lovable · Replit · v0 · Bolt.new

## 23 · The rest

- **Section tag:** How to use it *· five ways*
- **Headline:** The rest. *Small stuff that works.* — verdict: Small wins
- **Mock (dictation + meeting notes):**
  - Dictation: "…then next steps as bullets, and copy the VAT team" **· typed as you talk**
  - Meeting notes · auto-drafted: Fees agreed: £1,850 a month from April · Client sends the payroll CSV by Friday
  - Flag: ⚠ It met the client once. Check names and numbers.
- **The rule:** Recording a client? *Say so, in words, every time.* A bot in the call doesn't count.
- **What I use:** Wispr Flow (Talk instead of type, in any app. It's cloud, so not for client secrets. — Everywhere) · Fireflies (The calls I choose, summarised and actioned. Off for anything sensitive.)
- **Also out there:** Loom AI · Granola · Otter · Fathom · superwhisper (on-device) · Teams recap

## 24 · Takeaways

- **Section tag:** Wrapping up
- **Headline:** Key *takeaways.*
- **Rows:**
  1. 😌 The work isn't going away. *Someone has to rip the asbestos out.*
  2. 💸 The narrative is hype, powered by *massive financial bets.*
  3. 🏗️ Build with it. Use it. *Don't let it run your accounting.*
- **Sign-off:** Or at least, that's what I think.

## 25 · Thank you

- **Headline:** Thank *you.*
- **Line:** Questions welcome, now or after.
- **Contact card:** Dave Sellick — Founder, Sidgrove — LinkedIn /in/davesellick
