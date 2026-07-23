import assert from "node:assert/strict";
import { caseDecisionContent } from "../data/caseDecisionContent.mjs";

const expectedSlugs = [
  "tiny-achievement-app",
  "meituan-supply-growth",
  "community-growth",
  "campaign-marketing",
  "ai-apply-assistant"
];

assert.deepEqual(
  Object.keys(caseDecisionContent).sort(),
  expectedSlugs.sort(),
  "all portfolio cases should have decision content"
);

for (const slug of expectedSlugs) {
  const item = caseDecisionContent[slug];

  assert.ok(item.roleGoal?.role, `${slug} should describe the candidate role`);
  assert.ok(item.roleGoal?.goal, `${slug} should describe the project goal`);
  assert.ok(item.roleGoal?.boundary, `${slug} should describe the project boundary`);

  assert.ok(item.problemJudgement?.surface, `${slug} should describe the surface problem`);
  assert.ok(item.problemJudgement?.core, `${slug} should describe the real bottleneck`);
  assert.ok(
    item.problemJudgement?.reasoning?.length >= 2,
    `${slug} should include at least two reasoning signals`
  );

  assert.ok(item.options?.length >= 2, `${slug} should compare at least two options`);
  assert.ok(item.selected?.optionId, `${slug} should identify the selected option`);
  assert.ok(
    item.options.some((option) => option.id === item.selected.optionId),
    `${slug} selected option should exist in the option list`
  );
  assert.ok(item.selected?.reasons?.length >= 2, `${slug} should explain why the option was selected`);

  assert.ok(item.challenges?.length >= 2, `${slug} should include execution challenges`);
  for (const challenge of item.challenges) {
    assert.ok(challenge.challenge, `${slug} challenge should name the difficulty`);
    assert.ok(challenge.solution, `${slug} challenge should include the solution`);
    assert.ok(challenge.learning, `${slug} challenge should include the learning`);
  }

  assert.ok(item.resultScope?.scope, `${slug} should define the result scope`);
  assert.ok(item.resultScope?.caveat, `${slug} should state the metric caveat`);
  assert.ok(item.resultScope?.evidence?.length >= 2, `${slug} should list evidence sources`);

  assert.ok(item.methodTransfer?.name, `${slug} should name the transferable method`);
  assert.ok(item.methodTransfer?.steps?.length >= 3, `${slug} should include method steps`);
  assert.ok(
    item.methodTransfer?.scenarios?.length >= 3,
    `${slug} should include transferable scenarios`
  );
}

const smallWinsDecision = caseDecisionContent["tiny-achievement-app"];
const smallWinsSerialized = JSON.stringify(smallWinsDecision);

[
  "运营洞察",
  "AI协作",
  "AI任务",
  "指标",
  "7日记录率",
  "主动打开频次",
  "随机回顾使用率"
].forEach((phrase) => {
  assert.match(
    smallWinsSerialized,
    new RegExp(phrase),
    `small wins decision content should expose ${phrase}`
  );
});

assert.equal(
  smallWinsDecision.methodTransfer.name,
  "运营洞察-AI任务-MVP验证-指标扩样"
);

console.log("case decision content complete");
