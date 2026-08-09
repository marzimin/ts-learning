# Phase 6 — Audit `ds-template`'s frontend

🔒 **Not yet unlocked.**

Complete Phases 1–5 first.

---

## The reframing

Every earlier version of this plan ended with a capstone: build a full ML app from scratch
to prove you can. That is no longer the right ending, because the app already exists.

`ds-template`'s backend was hand-built with AI assistance. **Its frontend was largely
AI-generated and never reviewed.** This repo's own Mandatory Review Gate — walk through it
in plain English, name one thing to understand before production, name one thing that
breaks if requirements change, answer one comprehension question — was never run against
a single file of it.

That is not a hypothetical risk. It is a real, existing backlog, and it is exactly the
failure mode this whole repo was created to prevent: *shipping code you cannot read, debug,
or judge*. Building a second app from scratch would dodge the problem rather than close it.

**So the endpoint of the learning plan is not "build a capstone" but "retroactively earn
the frontend that already exists."**

This is also the harder exercise, and the more realistic one. Reviewing unfamiliar code you
did not write — and forming an opinion about it — is the actual day-to-day skill. Writing
something new from a blank file is not.

---

## How to work through it

The working checklist is [`AUDIT.md`](AUDIT.md) in this folder. It lists every file in
`ds-template/frontend/src/`, ordered easiest-first — pure TypeScript before React,
primitives before pages — with the four Review Gate questions to answer against each one.

Work top to bottom. A file is only **done** when you can explain it without assistance
*and* you have recorded an opinion about it in the `My opinion` column. "It looks fine" is
not an opinion. "I'd have split this in two, and here's why I now think they were right not
to" is.

Expect to disagree with some of it. That is the point — a reviewer who agrees with
everything is not reviewing.

---

## Prerequisites Checklist

Before starting this phase, you should be able to:

- [ ] Explain every line of code in your Phase 1 mini project without help
- [ ] Have your Phase 1 project committed to GitHub
- [ ] Have answered your Phase 1 open questions
- [ ] Read `ds-template/docs/architecture.md` §1–2 and `docs/frontend.md` in full
- [ ] Regenerate types with `make types` and explain what changed (Phase 5)

---

*This repo grows with you. One phase at a time.*
