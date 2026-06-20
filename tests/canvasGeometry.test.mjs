import assert from "node:assert/strict";
import test from "node:test";

import { connectionPath, nodeAnchor } from "../lib/canvasGeometry.mjs";

const box = { left: 100, top: 200, width: 300, height: 120 };
const offset = { x: 40, y: -30 };

test("nodeAnchor returns the requested side midpoint with its drag offset", () => {
  assert.deepEqual(nodeAnchor(box, offset, "right"), { x: 440, y: 230 });
  assert.deepEqual(nodeAnchor(box, offset, "left"), { x: 140, y: 230 });
  assert.deepEqual(nodeAnchor(box, offset, "top"), { x: 290, y: 170 });
  assert.deepEqual(nodeAnchor(box, offset, "bottom"), { x: 290, y: 290 });
});

function pathCoordinates(path) {
  assert.match(
    path,
    /^M -?\d+(?:\.\d+)? -?\d+(?:\.\d+)? C -?\d+(?:\.\d+)? -?\d+(?:\.\d+)? -?\d+(?:\.\d+)? -?\d+(?:\.\d+)? -?\d+(?:\.\d+)? -?\d+(?:\.\d+)?$/
  );

  return path.match(/-?\d+(?:\.\d+)?/g).map(Number);
}

test("connectionPath creates a finite horizontal cubic Bezier with a minimum bend", () => {
  const coordinates = pathCoordinates(connectionPath({ x: 20, y: 40 }, { x: 100, y: 80 }));

  assert.deepEqual(coordinates.slice(0, 2), [20, 40]);
  assert.deepEqual(coordinates.slice(-2), [100, 80]);
  assert.ok(coordinates.every(Number.isFinite));
  assert.ok(Math.abs(coordinates[2] - coordinates[0]) >= 70);
  assert.ok(Math.abs(coordinates[4] - coordinates[6]) >= 70);
});

test("connectionPath creates a finite vertical cubic Bezier with a minimum bend", () => {
  const coordinates = pathCoordinates(connectionPath({ x: 40, y: 20 }, { x: 80, y: 100 }));

  assert.deepEqual(coordinates.slice(0, 2), [40, 20]);
  assert.deepEqual(coordinates.slice(-2), [80, 100]);
  assert.ok(coordinates.every(Number.isFinite));
  assert.ok(Math.abs(coordinates[3] - coordinates[1]) >= 70);
  assert.ok(Math.abs(coordinates[5] - coordinates[7]) >= 70);
});
