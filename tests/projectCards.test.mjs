import assert from "node:assert/strict";
import test from "node:test";

import { projectCards } from "../data/projectCards.mjs";

test("project cards expose ordered presentation metadata", () => {
  const cards = Object.values(projectCards);

  assert.deepEqual(
    cards.map(({ owner, project }) => [owner, project]),
    [
      ["独立AI项目", "小成就 APP"],
      ["美团", "供给生态"],
      ["滴滴", "增长漏斗"],
      ["滴滴", "大促操盘"]
    ]
  );
  assert.deepEqual(
    cards.map(({ cover }) => cover),
    ["product-validation", "supply-flywheel", "growth-funnel", "campaign-map"]
  );
  assert.deepEqual(
    cards.map(({ ink }) => ink),
    ["#0b6b34", "#7a5200", "#174f9c", "#9a3412"]
  );
});
