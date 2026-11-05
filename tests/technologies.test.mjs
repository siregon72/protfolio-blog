import assert from "node:assert/strict";
import test from "node:test";
import { getTechnology } from "../lib/technologies.ts";

test("versioned names and whitespace resolve to the same technology", () => {
  assert.equal(getTechnology(" Next.js 16 ").name, "Next.js");
  assert.equal(getTechnology("TAILWIND CSS 4.1").name, "Tailwind CSS");
});

test("unknown names and inherited object properties stay plain text", () => {
  for (const name of ["macOS", "__proto__", "constructor", "toString"]) {
    assert.deepEqual(getTechnology(name), { name });
  }
});
