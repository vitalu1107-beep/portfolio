import assert from "node:assert/strict";
import test from "node:test";

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
