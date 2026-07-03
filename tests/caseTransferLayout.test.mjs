import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const pageSource = readFileSync(new URL("../pages/cases/[slug].js", import.meta.url), "utf8");
const cssSource = readFileSync(new URL("../styles/globals.css", import.meta.url), "utf8");

const transferFunction = pageSource.match(/function CaseTransferMethod[\s\S]*?function CaseValidationPanel/)?.[0] || "";

assert.match(transferFunction, /case-review-transfer/);
assert.match(transferFunction, /case-transfer-grid/);
assert.match(transferFunction, /case-transfer-steps/);
assert.match(transferFunction, /case-transfer-scenarios/);
assert.doesNotMatch(transferFunction, /case-validation-grid/);

assert.match(pageSource, /<CaseTransferMethod method=\{decision\?\.methodTransfer\} \/>[\s\S]*<\/section>/);
assert.match(cssSource, /\.case-review-transfer\s*\{[\s\S]*grid-column:\s*1\s*\/\s*-1/);
assert.match(cssSource, /\.case-transfer-grid\s*\{[\s\S]*grid-template-columns:\s*minmax\(0,\s*1\.08fr\)\s*minmax\(0,\s*0\.92fr\)/);
assert.match(cssSource, /\.case-transfer-steps ol\s*\{[\s\S]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/);
assert.match(cssSource, /@media \(max-width:\s*680px\)[\s\S]*\.case-transfer-grid/);

console.log("case transfer layout is compact");
