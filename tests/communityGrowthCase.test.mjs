import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

import { getCaseBySlug } from "../data/cases.js";

const communityCase = getCaseBySlug("community-growth");

test("community growth case keeps the approved hero title", () => {
  assert.equal(communityCase.hero.title, "从城市冷启动到100W+用户的私域增长实践");
});

test("community growth case rebuilds the post-hero story around the original funnel evidence", () => {
  assert.equal(communityCase.hideModel, true);
  assert.match(communityCase.problem, /新城市冷启动/);
  assert.match(communityCase.problem, /C端目标70W/);
  assert.match(communityCase.problem, /B端目标3W/);
  assert.match(communityCase.strategy, /线下BD获客/);
  assert.match(communityCase.strategy, /团长信任承接/);
  assert.match(communityCase.strategy, /标签分层/);

  assert.deepEqual(
    communityCase.conversionEvidence.map(({ title }) => title),
    ["客户意向度标签分层", "用户转化路径"]
  );
  assert.notEqual(
    communityCase.conversionEvidence[1].src,
    "/assets/cases/community-flow.jpg",
    "the conversion path should use a redrawn visual instead of repeating the PPT path screenshot"
  );
  assert.deepEqual(
    communityCase.executionMatrix.map(({ stage }) => stage),
    ["核心用户沉淀期", "裂变前期准备", "裂变中动作", "品牌影响力营销", "活动复盘"]
  );
  assert.equal(communityCase.resultHighlights.length, 4);
  assert.deepEqual(communityCase.executionMatrix[0].deliverables, [
    "线下BD引流话术*1",
    "线下引流操作视频*1"
  ]);
  assert.deepEqual(communityCase.executionMatrix[1].deliverables, [
    "线上社群话术*1",
    "用户标签体系标注*1"
  ]);
  assert.deepEqual(communityCase.executionMatrix[2].deliverables, [
    "新用户推荐礼品表*1",
    "客户好评素材*20"
  ]);
  assert.deepEqual(communityCase.executionMatrix[3].deliverables, [
    "明星宣发视频*1",
    "滴滴打车App宣传*1"
  ]);
  assert.deepEqual(communityCase.executionMatrix[4].deliverables, ["活动复盘文档*1"]);
  assert.equal(communityCase.sectionVisuals.review, "/assets/cases/community-review-summary.svg");
  assert.equal(communityCase.resultEvidence.length, 1);
});

test("community growth case uses the recovered PPT evidence assets after the hero", () => {
  const expectedAssets = [
    "/assets/cases/community-background-targets.png",
    "/assets/cases/community-bd-script.png",
    "/assets/cases/community-user-tagging.png",
    "/assets/cases/community-conversion-loop.svg",
    "/assets/cases/community-review-summary.svg",
    "/assets/cases/community-didi-app-promo.jpg",
    "/assets/cases/community-brand-poster.png",
    "/assets/cases/community-result.jpg"
  ];

  const serialized = JSON.stringify(communityCase);
  for (const asset of expectedAssets) {
    assert.match(serialized, new RegExp(asset.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.equal(
      existsSync(new URL(`../public${asset}`, import.meta.url)),
      true,
      `${asset} should exist in public assets`
    );
  }
});

test("case detail page can render the community growth evidence modules", () => {
  const source = readFileSync(new URL("../pages/cases/[slug].js", import.meta.url), "utf8");

  assert.match(source, /case-conversion-evidence/);
  assert.match(source, /case-execution-matrix/);
  assert.match(source, /case-result-highlight-grid/);
  assert.match(source, /!item\.hideModel/);
  assert.match(source, /is-summary-only/);
});
