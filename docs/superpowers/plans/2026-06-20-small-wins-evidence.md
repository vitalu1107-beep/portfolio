# 小成就 APP 证据化案例重构 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Replace unsupported claims and synthetic evidence in the Small Wins case with real product screenshots, verified GitHub milestones, and explicit validation boundaries.

**Architecture:** Extend only the Small Wins case data with evidence-specific fields. The shared case page will read optional execution visuals, validation statuses, and development milestones; other cases retain their existing rendering.

**Tech Stack:** Next.js 14, React 18, CSS, Node.js built-in tests.

---

### Task 1: Evidence assets and case data

**Files:**
- Create: `public/assets/cases/app-real-home.png`
- Create: `public/assets/cases/app-real-record.png`
- Create: `public/assets/cases/app-real-wall.png`
- Create: `public/assets/cases/app-real-review.png`
- Create: `public/assets/cases/app-real-settings.png`
- Modify: `data/cases.js`
- Create: `tests/tinyAchievementCase.test.mjs`

- [ ] Write a failing source test asserting the revised title, validation boundaries, four explicitly mapped execution visuals, three GitHub milestones, and absence of banned phrases.
- [ ] Run the Node test and confirm RED.
- [ ] Copy the five user-provided screenshots into the case assets directory.
- [ ] Rewrite the Small Wins case data and add `executionIntro`, `executionVisuals`, `validationStatus`, and `developmentTimeline`.
- [ ] Run tests and confirm GREEN.

### Task 2: Evidence-specific case rendering

**Files:**
- Modify: `pages/cases/[slug].js`
- Modify: `styles/globals.css`

- [ ] Use `executionIntro` instead of recruiter-facing generic copy.
- [ ] Resolve execution images from explicit paths when provided.
- [ ] Render validation status and GitHub timeline instead of unsupported charts when optional evidence data exists.
- [ ] Preserve current chart rendering for the other three cases.
- [ ] Make real phone screenshots use contain-fit and stable responsive dimensions.

### Task 3: Verification and commit

**Files:**
- All files above.

- [ ] Run all Node tests.
- [ ] Run `git diff --check`.
- [ ] Confirm banned phrases and synthetic Small Wins evidence are absent from rendered data paths.
- [ ] Commit with message `Rebuild Small Wins case with real evidence`.

