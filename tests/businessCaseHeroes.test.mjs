import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";

import { businessCaseHeroes } from "../data/businessCaseHeroes.mjs";

test("business case heroes use the approved narrative titles", () => {
  assert.deepEqual(
    Object.values(businessCaseHeroes).map(({ index, title }) => [index, title]),
    [
      ["02", "从KOS达人生态到供给增长飞轮的体系化搭建"],
      ["03", "从城市冷启动到100W+用户的私域增长实践"],
      ["04", "从目标拆解到跨部门协同的618增长战役"]
    ]
  );
});

test("each business hero exposes three high-signal metrics and a board visual", () => {
  for (const hero of Object.values(businessCaseHeroes)) {
    assert.equal(hero.layout, "narrative-business");
    assert.equal(hero.visualStyle, "board");
    assert.equal(hero.metrics.length, 3);
    assert.match(hero.visual, /^\/assets\/cases\//);
    assert.ok(hero.validationNote.length > 20);
    assert.equal(hero.actions.length, 2);
  }
});

test("campaign hero retains the ROI limitation in its review boundary", () => {
  assert.match(businessCaseHeroes["campaign-marketing"].validationNote, /ROI为1\.3/);
  assert.match(businessCaseHeroes["campaign-marketing"].validationNote, /低于原目标/);
});

test("community growth hero uses a unique drawn visual instead of the result table", () => {
  const hero = businessCaseHeroes["community-growth"];

  assert.equal(hero.visual, "/assets/cases/community-hero-growth-map.svg");
  assert.notEqual(hero.visual, "/assets/cases/community-result.jpg");
  assert.equal(
    existsSync(new URL(`../public${hero.visual}`, import.meta.url)),
    true,
    "community hero visual should exist"
  );
  assert.match(hero.visualCaption, /增长系统地图/);
});
