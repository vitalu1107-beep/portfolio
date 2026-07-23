import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { caseStudies } from "../data/cases.js";
import { findVisualBySrc, selectEvidenceStrip } from "../lib/casePresentation.mjs";

const gallery = [
  { src: "/home.png", title: "首页" },
  { src: "/record.png", title: "记录" },
  { src: "/wall.png", title: "成就墙" }
];

test("findVisualBySrc resolves an explicitly mapped product screen", () => {
  assert.deepEqual(findVisualBySrc(gallery, "/wall.png"), gallery[2]);
  assert.equal(findVisualBySrc(gallery, "/missing.png"), undefined);
});

test("selectEvidenceStrip follows explicit evidence order", () => {
  assert.deepEqual(
    selectEvidenceStrip(gallery, ["/wall.png", "/home.png"]),
    [gallery[2], gallery[0]]
  );
});

test("selectEvidenceStrip falls back to the first five gallery items", () => {
  assert.deepEqual(selectEvidenceStrip(gallery), gallery);
});

test("all case studies expose the candidate role clearly", () => {
  assert.equal(caseStudies.length, 5);

  for (const item of caseStudies) {
    assert.equal(typeof item.role, "string", `${item.shortTitle} should define a role`);
    assert.ok(item.role.length >= 8, `${item.shortTitle} role should be specific`);
    assert.doesNotMatch(item.role, /项目操盘$/, `${item.shortTitle} should not use fallback role copy`);
  }
  assert.equal(caseStudies.at(-1).slug, "ai-apply-assistant");
  assert.equal(caseStudies.at(-1).shortTitle, "AI 投递助手");
  assert.deepEqual(
    caseStudies.at(-1).externalLinks.map((link) => link.label),
    ["查看静态原型", "查看代码"]
  );
});

test("narrative case hero renders the role block", () => {
  const source = readFileSync(new URL("../pages/cases/[slug].js", import.meta.url), "utf8");

  assert.match(source, /case-hero-role/);
  assert.match(source, /我的角色/);
});
