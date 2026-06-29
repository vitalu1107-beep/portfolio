import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const indexSource = readFileSync(new URL("../pages/index.js", import.meta.url), "utf8");

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
