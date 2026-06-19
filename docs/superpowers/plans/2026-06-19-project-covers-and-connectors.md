# Project Covers and Dynamic Connectors Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the four generic project images with project-specific business-model covers, add two-level ownership labels, and make canvas connectors follow dragged cards.

**Architecture:** Move card presentation metadata into a focused data module, render each cover through a reusable `ProjectCover` component, and render relationships in one SVG `CanvasConnections` layer. Existing drag offsets remain the single source of truth for cards and connector endpoints.

**Tech Stack:** Next.js 14, React 18, CSS, SVG, Node.js built-in test runner.

---

### Task 1: Project presentation metadata

**Files:**
- Create: `data/projectCards.mjs`
- Create: `tests/projectCards.test.mjs`
- Modify: `pages/index.js`

- [ ] **Step 1: Write the failing metadata tests**

Assert the four approved label pairs:

```js
assert.deepEqual(
  Object.values(projectCards).map(({ owner, project }) => [owner, project]),
  [
    ["独立AI项目", "小成就 APP"],
    ["美团", "供给生态"],
    ["滴滴", "增长漏斗"],
    ["滴滴", "大促操盘"]
  ]
);
```

Also assert distinct cover variants:
`product-validation`, `supply-flywheel`, `growth-funnel`, and `campaign-map`.

- [ ] **Step 2: Verify RED**

Run:

```bash
/Users/luqian/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test tests/projectCards.test.mjs
```

Expected: FAIL because `data/projectCards.mjs` does not exist.

- [ ] **Step 3: Create the metadata module**

Move the current inline `projectCards` object into `data/projectCards.mjs`. Add `owner`, `project`, and `cover` to every record while preserving headline, copy, steps and proofs.

- [ ] **Step 4: Verify GREEN**

Run the test command again. Expected: both tests PASS.

- [ ] **Step 5: Integrate and commit**

Import `projectCards` in `pages/index.js`, remove the inline object, then commit:

```bash
git add data/projectCards.mjs tests/projectCards.test.mjs pages/index.js
git commit -m "Add project cover metadata"
```

### Task 2: Business-model project covers and label hierarchy

**Files:**
- Create: `components/ProjectCover.js`
- Modify: `pages/index.js`
- Modify: `styles/globals.css`

- [ ] **Step 1: Implement four explicit cover variants**

Create `ProjectCover({ variant, accent, title })` with these visual models:

```js
const coverContent = {
  "product-validation": {
    eyebrow: "AI PRODUCT BUILD",
    metric: "7 DAYS",
    nodes: ["洞察", "MVP", "上线", "验证"]
  },
  "supply-flywheel": {
    eyebrow: "SUPPLY FLYWHEEL",
    metric: "520 KOS",
    nodes: ["达人", "商家", "爆品", "GMV"]
  },
  "growth-funnel": {
    eyebrow: "GROWTH FUNNEL",
    metric: "100W+ USERS",
    nodes: ["触达", "沉淀", "裂变", "转化"]
  },
  "campaign-map": {
    eyebrow: "618 WAR MAP",
    metric: "+60% GMV",
    nodes: ["目标", "爆品", "渠道", "战报"]
  }
};
```

Use a phone path for product validation, a circular flywheel for supply, descending bars for the growth funnel, and a command-center map for the campaign.

- [ ] **Step 2: Replace generic cover images**

Replace `AssetImage` and `.project-model-strip` inside `ProjectNode` with `ProjectCover`.

- [ ] **Step 3: Add two separate labels**

Render before the cover:

```jsx
<div className="project-labels">
  <span className="project-owner-label">{card.owner}</span>
  <span className="project-type-label">{card.project}</span>
</div>
```

The owner label uses the project accent as a solid background and 12px type. The project/type label uses a light tint and 10px type. Remove the repeated category line from the body.

- [ ] **Step 4: Style stable cover layouts**

Set a fixed 154px cover height, minimum 9px text, stable grid/flex dimensions, and variant-specific graphics. Do not use viewport-scaled typography.

- [ ] **Step 5: Verify and commit**

```bash
/Users/luqian/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test tests/projectCards.test.mjs
git diff --check
git add components/ProjectCover.js pages/index.js styles/globals.css
git commit -m "Design project business model covers"
```

Expected: tests PASS and no whitespace errors.

### Task 3: Connector geometry with test-first behavior

**Files:**
- Create: `lib/canvasGeometry.mjs`
- Create: `tests/canvasGeometry.test.mjs`
- Create: `components/CanvasConnections.js`
- Modify: `pages/index.js`
- Modify: `styles/globals.css`

- [ ] **Step 1: Write failing geometry tests**

Test that a right-side anchor includes drag displacement:

```js
assert.deepEqual(
  nodeAnchor(
    { left: 100, top: 200, width: 300, height: 120 },
    { x: 40, y: -30 },
    "right"
  ),
  { x: 440, y: 230 }
);
```

Test that the path from `{ x: 100, y: 80 }` to `{ x: 400, y: 220 }` starts and ends at those exact points.

- [ ] **Step 2: Verify RED**

Run:

```bash
/Users/luqian/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test tests/canvasGeometry.test.mjs
```

Expected: FAIL because `lib/canvasGeometry.mjs` does not exist.

- [ ] **Step 3: Implement pure geometry helpers**

Implement `nodeAnchor(box, offset, side)` for left, right, top and bottom anchors. Implement `connectionPath(start, end)` as a cubic Bézier with horizontal control points and at least a 70px bend.

- [ ] **Step 4: Verify GREEN**

Run the geometry tests again. Expected: both tests PASS.

- [ ] **Step 5: Create the SVG connector component**

`CanvasConnections` receives `connections`, `nodes`, and `positions`. For each connection, calculate two anchors and render a dashed SVG path. The SVG has `pointer-events: none`.

- [ ] **Step 6: Define relationships in the homepage**

Connect:
- profile → personal-info
- personal-info → timeline
- timeline → capabilities
- capabilities → contact

Use exact base boxes matching current CSS positions and dimensions. Render the SVG before cards and remove the four fixed `.os-line` elements.

- [ ] **Step 7: Verify and commit**

```bash
/Users/luqian/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test tests/*.test.mjs
git diff --check
git add lib/canvasGeometry.mjs tests/canvasGeometry.test.mjs components/CanvasConnections.js pages/index.js styles/globals.css
git commit -m "Make canvas connectors follow dragged cards"
```

Expected: four tests PASS and no whitespace errors.

### Task 4: Build and interaction verification

**Files:**
- Modify only if verification exposes a defect.

- [ ] **Step 1: Install dependencies with the bundled runtime**

```bash
PATH="/Users/luqian/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH" /Users/luqian/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/pnpm install --frozen-lockfile
```

Expected: dependencies install without changing the lockfile.

- [ ] **Step 2: Run tests and production build**

```bash
/Users/luqian/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test tests/*.test.mjs
PATH="/Users/luqian/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH" /Users/luqian/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/pnpm build
```

Expected: tests PASS and the Next.js static export completes.

- [ ] **Step 3: Verify the local page**

Start the dev server and verify:
- all four covers are visually distinct;
- every card shows two separate labels;
- dragging any connected card continuously updates the corresponding path;
- endpoints stay aligned at 10%, 35%, 72%, 100%, and 130% zoom;
- links remain clickable;
- mobile covers do not clip and connectors are hidden when the canvas becomes a flat layout.

- [ ] **Step 4: Final status check**

```bash
git status --short --branch
git log -5 --oneline
```

Expected: a clean worktree containing only the planned commits ahead of remote.

