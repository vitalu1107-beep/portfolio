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
  assert.match(indexSource, /"personal-info": \{ left: 260, top: 170, width: 430, height: 420 \}/);
  assert.match(styleSource, /\.identity-card\s*\{[\s\S]*width: 430px;[\s\S]*display: grid;[\s\S]*gap: 14px;/);
  assert.match(styleSource, /\.identity-avatar-photo\s*\{[\s\S]*object-position: center top;/);
});

test("timeline uses compact three-line entries", () => {
  assert.match(indexSource, /timeline: \{ left: 950, top: 170, width: 380, height: 455 \}/);
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
});

test("capability card uses compact pill tags with added operation roles", () => {
  ["Vibe Coding", "内容运营", "项目管理", "AI产品运营", "Agent Native", "用户运营", "商家运营"].forEach(
    (label) => {
      assert.match(indexSource, new RegExp(label));
    }
  );

  assert.match(indexSource, /capability-pill-grid/);
  assert.match(styleSource, /\.capability-pill-grid\s*\{[\s\S]*flex-wrap: wrap;/);
  assert.match(styleSource, /\.capability-pill\.green\s*\{/);
});
