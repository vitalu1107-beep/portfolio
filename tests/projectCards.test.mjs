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
      ["滴滴", "大促操盘"],
      ["独立 AI 工具", "求职投递工作台"]
    ]
  );
  assert.deepEqual(
    cards.map(({ cover }) => cover),
    ["product-validation", "supply-flywheel", "growth-funnel", "campaign-map", "ai-apply-assistant"]
  );
  assert.deepEqual(
    cards.map(({ ink }) => ink),
    ["#0b6b34", "#7a5200", "#174f9c", "#9a3412", "#065f46"]
  );
  assert.deepEqual(
    cards.map(({ role }) => role),
    [
      "AI产品验证 / 运营洞察",
      "商家及供给运营",
      "运营负责人 / 用户增长",
      "活动营销 / 项目协同",
      "产品设计 / Prompt 设计 / AI 辅助开发"
    ]
  );
  assert.deepEqual(
    cards.map(({ evidenceType }) => evidenceType),
    ["AI产品实践证据", "供给增长能力证据", "用户增长能力证据", "项目协同能力证据", "AI 产品实践证据"]
  );
  cards.forEach((card) => {
    assert.equal(card.steps.length, 4);
  });
  assert.equal(projectCards["ai-apply-assistant"].image, "/assets/cases/ai-apply-assistant-workbench.png");
  assert.equal(projectCards["ai-apply-assistant"].proofs[0].value, "0→1");
  assert.equal(projectCards["ai-apply-assistant"].proofs[1].value, "4类");
});
