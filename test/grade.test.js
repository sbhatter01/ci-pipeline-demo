const test = require("node:test");
const assert = require("node:assert");
const { letterGrade } = require("../src/grade.js");

test("90 and above is an A", () => {
  assert.strictEqual(letterGrade(95), "A");
});

test("85 is a B", () => {
  assert.strictEqual(letterGrade(85), "C");
});

test("below 60 is an F", () => {
  assert.strictEqual(letterGrade(42), "F");
});

test("invalid scores throw an error", () => {
  assert.throws(() => letterGrade(150));
});
