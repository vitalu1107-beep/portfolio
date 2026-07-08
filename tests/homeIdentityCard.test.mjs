import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { profile } from "../data/profile.js";

const indexSource = readFileSync(new URL("../pages/index.js", import.meta.url), "utf8");
const styleSource = readFileSync(new URL("../styles/globals.css", import.meta.url), "utf8");

test("home identity card follows the compact glass-card structure", () => {
  assert.match(indexSource, /identity-glass-card/);
  assert.match(indexSource, /AI产品运营｜用户运营/);
  assert.match(indexSource, /用 AI 把用户洞察变成可验证的增长闭环/);
});

test("home identity card exposes four contact actions", () => {
  ["邮箱", "电话", "微信", "简历"].forEach((label) => {
    assert.match(indexSource, new RegExp(label));
  });
});

test("home identity card uses a balanced compact card rhythm", () => {
  assert.match(indexSource, /"personal-info": \{ left: 40, top: 44, width: 330, height: 286 \}/);
  assert.match(styleSource, /\.identity-card\s*\{[\s\S]*width: 330px;[\s\S]*min-height: 286px;[\s\S]*display: grid;/);
  assert.match(styleSource, /\.identity-avatar-photo\s*\{[\s\S]*object-position: center top;/);
});

test("timeline uses compact three-line entries", () => {
  assert.match(indexSource, /timeline: \{ left: 836, top: 304, width: 364, height: 206 \}/);
  assert.match(styleSource, /\.timeline-mini b\s*\{[\s\S]*white-space: nowrap;[\s\S]*text-overflow: ellipsis;/);
  assert.match(styleSource, /\.timeline-mini small\s*\{[\s\S]*white-space: nowrap;[\s\S]*text-overflow: ellipsis;/);

  profile.experience.forEach((item) => {
    const [, summary = ""] = item.split("：");

    assert.ok(summary.length <= 16, `${summary} should stay readable on the canvas`);
  });

  assert.match(profile.experience.join("\n"), /独立产品 - 小成就APP（AI产品 \/ PWA应用）/);
  assert.match(profile.experience.join("\n"), /美团 - 团买买项目组 - 商家及供给运营/);
});

test("timeline includes education experience from the resume", () => {
  const timeline = profile.experience.join("\n");

  assert.match(timeline, /广西大学（211全日制硕士）/);
  assert.match(timeline, /新闻与传播/);
  assert.match(timeline, /2017\.09 - 2019\.06/);
  assert.match(timeline, /北方民族大学（统招全日制本科）/);
  assert.match(timeline, /新闻学/);
  assert.match(timeline, /2013\.09 - 2017\.06/);
});

test("home canvas replaces duplicate contact block with a working method system", () => {
  assert.doesNotMatch(indexSource, /className="canvas-card contact-card/);
  assert.doesNotMatch(indexSource, /href: "#contact"/);
  assert.match(indexSource, /id="methods"/);
  assert.match(indexSource, /我的方法论/);
  assert.match(indexSource, /从用户需求到 AI 任务闭环/);
  assert.match(indexSource, /识别场景，找到卡点/);
  assert.match(indexSource, /定义任务，做成原型/);
  assert.match(indexSource, /验证反馈，判断放大/);
});

test("home canvas adds an explicit AI product operations thread", () => {
  assert.match(indexSource, /"ai-thread": \{ left: 40, top: 348, width: 330, height: 82 \}/);
  assert.match(indexSource, /AI PRODUCT OPS THREAD/);
  assert.match(indexSource, /把运营经验迁移到 AI 产品闭环/);
  ["用户洞察", "任务定义", "AI辅助原型", "数据复盘"].forEach((label) => {
    assert.match(indexSource, new RegExp(label));
  });
  assert.match(indexSource, /id: "personal-info-ai-thread"/);
  assert.match(styleSource, /\.ai-thread-card\s*\{[\s\S]*left: 40px;[\s\S]*top: 348px;[\s\S]*width: 330px;/);
});

test("timeline and working method headings share one visual type scale", () => {
  assert.match(styleSource, /\.canvas-section-heading\s*\{/);
  assert.match(indexSource, /className="canvas-section-heading"[\s\S]*经历时间线/);
  assert.match(indexSource, /className="canvas-section-heading"[\s\S]*我的方法论/);
  assert.doesNotMatch(indexSource, /MY WORKING METHOD/);
  assert.match(styleSource, /\.canvas-section-heading\s*\{[\s\S]*font-size: 18px;/);
});

test("working method card stays compact and does not cover capabilities", () => {
  assert.match(indexSource, /methods: \{ left: 398, top: 44, width: 410, height: 386 \}/);
  assert.match(indexSource, /capabilities: \{ left: 836, top: 44, width: 364, height: 236 \}/);
  assert.match(indexSource, /fromSide: "right"[\s\S]*toSide: "left"/);
  assert.match(styleSource, /\.methods-card\s*\{[\s\S]*width: 410px;[\s\S]*padding: 20px;/);
  assert.match(styleSource, /\.capability-card\s*\{[\s\S]*top: 44px;[\s\S]*width: 364px;[\s\S]*min-height: 236px;/);
  assert.match(styleSource, /\.method-lead\s*\{[\s\S]*font-size: 18px !important;[\s\S]*line-height: 1\.35;/);
  assert.match(styleSource, /\.method-step\s*\{[\s\S]*grid-template-columns: 34px minmax\(0, 1fr\);/);
});

test("capability card uses compact pill tags with added operation roles", () => {
  ["AI产品思维", "AI产品实践", "LLM应用开发", "Vibe Coding", "用户运营", "增长策略", "商家运营", "项目管理"].forEach(
    (label) => {
      assert.match(indexSource, new RegExp(label));
    }
  );

  assert.match(indexSource, /capability-pill-grid/);
  assert.match(styleSource, /\.capability-pill-grid\s*\{[\s\S]*grid-template-columns: repeat\(2, minmax\(0, 1fr\)\);/);
  assert.match(styleSource, /\.capability-pill\s*\{[\s\S]*width: auto;[\s\S]*justify-content: center;/);
  assert.match(styleSource, /\.capability-pill\.green\s*\{/);
});

test("home canvas guides recruiters through a portfolio reading path", () => {
  assert.match(indexSource, /阅读路径/);
  assert.match(indexSource, /3分钟阅读建议/);
  assert.match(indexSource, /先看 AI 定位与方法/);
  assert.doesNotMatch(indexSource, /重点项目案例/);
  assert.doesNotMatch(indexSource, /04 \/ CASE STUDIES/);
  assert.match(indexSource, /project-evidence-line/);
  assert.match(indexSource, /我的角色：\{card\.role\}/);
  assert.match(indexSource, /查看案例/);
  assert.doesNotMatch(indexSource, /新建增长实验/);
  assert.doesNotMatch(indexSource, /双击修改/);
});

test("home project cards start higher and center their proof controls", () => {
  assert.doesNotMatch(indexSource, /card\?\.copy \|\| item\.summary/);
  assert.match(styleSource, /\.project-node-card\s*\{[\s\S]*width: 274px;[\s\S]*height: 252px;/);
  assert.match(styleSource, /\.project-node-1\s*\{[\s\S]*left: 40px;[\s\S]*top: 538px;/);
  assert.match(styleSource, /\.project-node-4\s*\{[\s\S]*left: 928px;[\s\S]*top: 538px;/);
  assert.match(styleSource, /\.project-label-row\s*\{[\s\S]*min-height: 58px;[\s\S]*border-bottom:/);
  assert.match(styleSource, /\.project-evidence-line\s*\{[\s\S]*width: max-content;/);
  assert.match(styleSource, /\.project-badge-stack\s*\{[\s\S]*display: grid;/);
  assert.match(styleSource, /\.project-cover\s*\{[\s\S]*height: 82px;/);
  assert.match(styleSource, /\.canvas-project-copy h3\s*\{[\s\S]*font-size: 15px;[\s\S]*-webkit-line-clamp: 2;/);
  assert.match(styleSource, /\.canvas-project-copy p\s*\{[\s\S]*display: none;/);
  assert.match(styleSource, /\.canvas-project-steps\s*\{[\s\S]*justify-content: flex-start;/);
  assert.match(styleSource, /\.canvas-project-metrics\s*\{[\s\S]*gap: 12px;[\s\S]*text-align: center;/);
  assert.match(styleSource, /\.canvas-project-metrics b\s*\{[\s\S]*display: grid;[\s\S]*border-radius: 12px;/);
  assert.match(styleSource, /\.project-link-row\s*\{[\s\S]*align-self: end;/);
});

test("home desktop canvas is a centered fixed stage with center-origin zoom", () => {
  assert.match(indexSource, /const canvasSize = \{ width: 1240, height: 820 \};/);
  assert.match(indexSource, /const zoomSteps = \[0\.7, 0\.8, 0\.9, 1, 1\.1\];/);
  assert.match(indexSource, /const defaultZoomIndex = 1;/);
  assert.match(indexSource, /className="main-area os-canvas"/);
  assert.match(indexSource, /className="top-toolbar"/);
  assert.match(indexSource, /className="canvas-viewport"/);
  assert.match(indexSource, /className="stage-shell canvas-stage-shell"/);
  assert.match(indexSource, /transform: `scale\(\$\{zoom\}\)`/);
  assert.match(styleSource, /\.canvas-viewport\s*\{[\s\S]*display: grid;[\s\S]*place-items: center;/);
  assert.match(styleSource, /\.canvas-stage\s*\{[\s\S]*transform-origin: center center;/);
  assert.doesNotMatch(styleSource, /transform-origin: top left;/);
});

test("home mobile reading flow prioritizes identity, method, cases, capability, and timeline", () => {
  assert.match(indexSource, /const mobileLayers = \[/);
  ["定位", "方法", "项目", "经历", "联系"].forEach((label) => {
    assert.match(indexSource, new RegExp(`label: "${label}"`));
  });
  assert.match(indexSource, /className="mobile-layer-list"/);
  assert.match(indexSource, /className="mobile-case-heading"/);
  assert.match(indexSource, /4个项目案例/);

  assert.match(styleSource, /\.mobile-layer-list,\s*\n\.mobile-case-heading\s*\{[\s\S]*display: none;/);
  assert.match(styleSource, /\.identity-card\s*\{[\s\S]*order: 1;/);
  assert.match(styleSource, /\.ai-thread-card\s*\{[\s\S]*order: 2;/);
  assert.match(styleSource, /\.methods-card\s*\{[\s\S]*order: 3;/);
  assert.match(styleSource, /\.mobile-case-heading\s*\{[\s\S]*order: 4;/);
  assert.match(styleSource, /\.project-node-1\s*\{[\s\S]*order: 5;/);
  assert.match(styleSource, /\.project-node-4\s*\{[\s\S]*order: 8;/);
  assert.match(styleSource, /\.capability-card\s*\{[\s\S]*order: 9;/);
  assert.match(styleSource, /\.timeline-card\s*\{[\s\S]*order: 10;/);
});

test("home mobile project cards are compact and touch friendly", () => {
  assert.match(indexSource, /function isMobileCanvas\(\)/);
  assert.match(indexSource, /window\.matchMedia\("\(max-width: 1023px\)"\)\.matches/);
  assert.match(indexSource, /if \(isMobileCanvas\(\)\) return;/);
  assert.match(styleSource, /\.layer-list\s*\{[\s\S]*display: none;/);
  assert.match(styleSource, /\.mobile-layer-list\s*\{[\s\S]*display: flex;[\s\S]*overflow-x: auto;/);
  assert.match(styleSource, /\.mobile-layer-list a\s*\{[\s\S]*min-height: 38px;/);
  assert.match(styleSource, /\.draggable-node\s*\{[\s\S]*touch-action: auto;/);
  assert.match(styleSource, /\.project-node-card\s*\{[\s\S]*border-radius: 18px;/);
  assert.match(styleSource, /\.project-label-row\s*\{[\s\S]*min-height: 0;[\s\S]*padding: 14px 56px 12px 16px;/);
  assert.match(styleSource, /\.project-role-line\s*\{[\s\S]*white-space: normal;/);
  assert.match(styleSource, /\.project-cover\s*\{[\s\S]*height: 124px;/);
  assert.match(styleSource, /\.canvas-project-copy h3\s*\{[\s\S]*min-height: 0;[\s\S]*-webkit-line-clamp: 3;/);
  assert.match(styleSource, /\.project-link-row a\s*\{[\s\S]*min-height: 44px;/);
});

test("home canvas starts zoomed out and keeps controls off the project cards", () => {
  assert.match(indexSource, /const defaultZoomIndex = 1;/);
  assert.match(indexSource, /useState\(defaultZoomIndex\)/);
  assert.match(indexSource, /<span>Swipe<\/span>[\s\S]*<em>左右滑动<\/em>/);
  assert.doesNotMatch(indexSource, /拖拽卡片/);
  assert.match(styleSource, /\.zoom-controls\s*\{[\s\S]*position: static;/);
  assert.match(styleSource, /\.canvas-toolbar\s*\{[\s\S]*position: static;/);
});

test("home visual theme uses green variables across desktop and mobile", () => {
  assert.match(styleSource, /--portfolio-primary: #16a34a;/);
  assert.match(styleSource, /--portfolio-deep: #15803d;/);
  assert.match(styleSource, /--portfolio-soft: #ecfdf3;/);
  assert.match(styleSource, /--portfolio-page: #f8faf7;/);
  assert.match(styleSource, /\.mobile-layer-list a\s*\{[\s\S]*border: 1px solid var\(--portfolio-border\);[\s\S]*color: var\(--portfolio-deep\);/);
  assert.match(styleSource, /\.project-node-card \.project-link-row a:first-child\s*\{[\s\S]*background: var\(--portfolio-primary\);/);
});
