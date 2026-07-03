import assert from "node:assert/strict";
import test from "node:test";

import { tinyAchievementCase } from "../data/tinyAchievementCase.mjs";

test("Small Wins case separates verified delivery, early signal, and next validation", () => {
  assert.equal(tinyAchievementCase.company, "独立AI项目");
  assert.equal(tinyAchievementCase.role, "AI产品验证 / 运营洞察 / AI协作交付");
  assert.equal(tinyAchievementCase.validationStatus.length, 3);
  assert.deepEqual(
    tinyAchievementCase.validationStatus.map(({ status }) => status),
    ["已验证", "初步信号", "待验证"]
  );
  assert.match(tinyAchievementCase.result, /N=1/);
  assert.match(tinyAchievementCase.review, /5-10名目标用户/);
});

test("Small Wins evidence maps real product screens to execution steps", () => {
  const expectedScreens = [
    "/assets/cases/app-real-record.png",
    "/assets/cases/app-real-wall.png",
    "/assets/cases/app-real-review.png",
    "/assets/cases/app-real-settings.png"
  ];

  assert.deepEqual(tinyAchievementCase.executionVisuals, expectedScreens);
  assert.ok(expectedScreens.every((src) => tinyAchievementCase.gallery.some((item) => item.src === src)));
  assert.ok(tinyAchievementCase.gallery.some((item) => item.src === "/assets/cases/app-real-home.png"));
  assert.deepEqual(tinyAchievementCase.sectionEvidenceLabels, {
    problem: "假设回应",
    strategy: "策略产出",
    result: "产品实证",
    review: "下一轮计划"
  });
});

test("Small Wins case uses auditable repository milestones and avoids unsupported claims", () => {
  assert.equal(tinyAchievementCase.developmentTimeline.length, 3);
  assert.ok(
    tinyAchievementCase.developmentTimeline.every(({ href }) =>
      href.startsWith("https://github.com/vitalu1107-beep/xiaochengji-pwa/commit/")
    )
  );

  const serialized = JSON.stringify(tinyAchievementCase);
  for (const phrase of ["招聘方", "功能练习", "基础增长潜力", "发现用户抗拒"]) {
    assert.equal(serialized.includes(phrase), false, `unsupported phrase found: ${phrase}`);
  }
  assert.equal(serialized.includes("app-optimization.jpg"), false);
  assert.equal(serialized.includes("app-dashboard.jpg"), false);
});

test("Small Wins frames the case as operations insight plus AI product validation", () => {
  const serialized = JSON.stringify(tinyAchievementCase);

  [
    "运营洞察",
    "AI协作",
    "AI任务拆解",
    "指标验证",
    "7日记录率",
    "主动打开频次",
    "随机回顾使用率"
  ].forEach((phrase) => {
    assert.match(serialized, new RegExp(phrase), `missing AI product validation phrase: ${phrase}`);
  });

  assert.match(tinyAchievementCase.hero.title, /运营洞察.*AI协作/);
  assert.equal(tinyAchievementCase.hero.metrics.some(({ label }) => label.includes("AI协作")), true);
});
