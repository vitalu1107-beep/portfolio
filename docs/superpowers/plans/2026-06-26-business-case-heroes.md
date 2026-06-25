# 三个业务案例统一首屏 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 将三个业务案例改为与小成就一致的案例叙事首屏。

**Architecture:** 把三个业务案例的首屏配置集中到独立数据模块，复用现有叙事首屏组件，并通过 `visualStyle` 区分手机产品截图与业务证据看板。

**Tech Stack:** Next.js 14、React 18、CSS、Node.js built-in tests。

---

### Task 1: 业务案例首屏数据

**Files:**
- Create: `data/businessCaseHeroes.mjs`
- Modify: `data/cases.js`
- Create: `tests/businessCaseHeroes.test.mjs`

- [ ] 先写失败测试，约束三个标题、三项成果、证据图和复盘边界。
- [ ] 创建业务案例首屏数据并接入三个案例。
- [ ] 运行测试确认通过。

### Task 2: 通用案例叙事组件

**Files:**
- Modify: `pages/cases/[slug].js`
- Modify: `styles/globals.css`

- [ ] 将小成就专用组件泛化为通用案例首屏。
- [ ] 支持 `phone` 与 `board` 两种证据画框。
- [ ] 支持外部按钮与内部锚点按钮。
- [ ] 保持桌面、平板和手机端稳定布局。

### Task 3: 验证

- [ ] 运行全部 Node 测试。
- [ ] 运行 `git diff --check`。
- [ ] 确认四个案例均使用统一首屏，其他详情内容不变。
