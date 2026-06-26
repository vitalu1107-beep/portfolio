import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

import { getCaseBySlug } from "../data/cases.js";

const communityCase = getCaseBySlug("community-growth");

test("community growth case keeps the approved hero title", () => {
  assert.equal(communityCase.hero.title, "从城市冷启动到100W+用户的私域增长实践");
});

test("community growth case rebuilds the post-hero story around the original funnel evidence", () => {
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
  assert.deepEqual(
    communityCase.executionMatrix.map(({ stage }) => stage),
    ["核心用户沉淀期", "裂变前期准备", "裂变中放大", "活动复盘"]
  );
  assert.equal(communityCase.resultHighlights.length, 4);
});

test("community growth case uses the recovered PPT evidence assets after the hero", () => {
  const expectedAssets = [
    "/assets/cases/community-background-targets.png",
    "/assets/cases/community-bd-script.png",
    "/assets/cases/community-user-tagging.png",
    "/assets/cases/community-reward-list.jpg",
    "/assets/cases/community-didi-app-promo.jpg",
    "/assets/cases/community-brand-poster.png",
    "/assets/cases/community-key-user-report.png"
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
});
