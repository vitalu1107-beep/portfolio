import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { profile } from "../data/profile.js";

const indexSource = readFileSync(new URL("../pages/index.js", import.meta.url), "utf8");
const styleSource = readFileSync(new URL("../styles/globals.css", import.meta.url), "utf8");

test("home identity card follows the compact glass-card structure", () => {
  assert.match(indexSource, /identity-glass-card/);
  assert.match(indexSource, /AI产品运营｜用户运营/);
  assert.match(indexSource, /把AI变成增长验证的第二执行力/);
});

test("home identity card exposes four contact actions", () => {
  ["邮箱", "电话", "微信", "简历"].forEach((label) => {
    assert.match(indexSource, new RegExp(label));
  });
});

test("home identity card uses a balanced compact card rhythm", () => {
  assert.match(indexSource, /"personal-info": \{ left: 120, top: 140, width: 390, height: 470 \}/);
  assert.match(styleSource, /\.identity-card\s*\{[\s\S]*width: 390px;[\s\S]*min-height: 470px;[\s\S]*display: grid;/);
  assert.match(styleSource, /\.identity-avatar-photo\s*\{[\s\S]*object-position: center top;/);
});

test("timeline uses compact three-line entries", () => {
  assert.match(indexSource, /timeline: \{ left: 650, top: 140, width: 380, height: 455 \}/);
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
  assert.match(indexSource, /从用户需求到任务闭环/);
  assert.match(indexSource, /识别需求，定义任务/);
  assert.match(indexSource, /跑通协作，完成任务/);
  assert.match(indexSource, /反馈系统，持续进化/);
});

test("timeline and working method headings share one visual type scale", () => {
  assert.match(styleSource, /\.canvas-section-heading\s*\{/);
  assert.match(indexSource, /className="canvas-section-heading"[\s\S]*经历时间线/);
  assert.match(indexSource, /className="canvas-section-heading"[\s\S]*我的方法论/);
  assert.doesNotMatch(indexSource, /MY WORKING METHOD/);
  assert.match(styleSource, /\.canvas-section-heading\s*\{[\s\S]*font-size: 25px;/);
});

test("working method card stays compact and does not cover capabilities", () => {
  assert.match(indexSource, /methods: \{ left: 1120, top: 140, width: 470, height: 455 \}/);
  assert.match(indexSource, /capabilities: \{ left: 1660, top: 140, width: 360, height: 350 \}/);
  assert.match(indexSource, /fromSide: "right"[\s\S]*toSide: "left"/);
  assert.match(styleSource, /\.methods-card\s*\{[\s\S]*width: 470px;[\s\S]*padding: 22px 24px;/);
  assert.match(styleSource, /\.capability-card\s*\{[\s\S]*top: 140px;[\s\S]*width: 360px;[\s\S]*min-height: 350px;/);
  assert.match(styleSource, /\.method-lead\s*\{[\s\S]*font-size: 22px !important;[\s\S]*line-height: 1\.35;/);
  assert.match(styleSource, /\.method-step\s*\{[\s\S]*grid-template-columns: 44px minmax\(0, 1fr\);/);
});

test("capability card uses compact pill tags with added operation roles", () => {
  ["Vibe Coding", "内容运营", "项目管理", "AI产品运营", "Agent Native", "用户运营", "商家运营"].forEach(
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
  assert.doesNotMatch(indexSource, /重点项目案例/);
  assert.doesNotMatch(indexSource, /04 \/ CASE STUDIES/);
  assert.match(indexSource, /我的角色：\{card\.role\}/);
  assert.match(indexSource, /查看案例/);
  assert.doesNotMatch(indexSource, /新建增长实验/);
  assert.doesNotMatch(indexSource, /双击修改/);
});

test("home project cards start higher and center their proof controls", () => {
  assert.doesNotMatch(indexSource, /card\?\.copy \|\| item\.summary/);
  assert.match(styleSource, /\.project-node-card\s*\{[\s\S]*width: 400px;[\s\S]*min-height: 0;/);
  assert.match(styleSource, /\.project-node-1\s*\{[\s\S]*top: 760px;/);
  assert.match(styleSource, /\.project-node-4\s*\{[\s\S]*top: 760px;/);
  assert.match(styleSource, /\.project-label-row\s*\{[\s\S]*min-height: 78px;[\s\S]*border-bottom:/);
  assert.match(styleSource, /\.project-badge-stack\s*\{[\s\S]*display: grid;/);
  assert.match(styleSource, /\.project-cover\s*\{[\s\S]*height: 154px;/);
  assert.match(styleSource, /\.canvas-project-copy h3\s*\{[\s\S]*font-size: 18px;[\s\S]*-webkit-line-clamp: 2;/);
  assert.match(styleSource, /\.canvas-project-copy p\s*\{[\s\S]*display: none;/);
  assert.match(styleSource, /\.canvas-project-steps\s*\{[\s\S]*justify-content: center;/);
  assert.match(styleSource, /\.canvas-project-metrics\s*\{[\s\S]*gap: 12px;[\s\S]*text-align: center;/);
  assert.match(styleSource, /\.canvas-project-metrics b\s*\{[\s\S]*display: grid;[\s\S]*border-radius: 12px;/);
  assert.match(styleSource, /\.project-link-row\s*\{[\s\S]*justify-content: center;/);
});

test("home canvas starts zoomed out and keeps controls off the project cards", () => {
  assert.match(indexSource, /const defaultZoomIndex = 4;/);
  assert.match(indexSource, /useState\(defaultZoomIndex\)/);
  assert.match(indexSource, /<span>Swipe<\/span>[\s\S]*<em>左右滑动<\/em>/);
  assert.doesNotMatch(indexSource, /拖拽卡片/);
  assert.match(styleSource, /\.zoom-controls\s*\{[\s\S]*top: 20px;[\s\S]*bottom: auto;/);
  assert.match(styleSource, /\.canvas-toolbar\s*\{[\s\S]*top: 20px;[\s\S]*bottom: auto;/);
});
