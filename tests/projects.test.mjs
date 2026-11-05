import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { registerHooks } from "node:module";
import test from "node:test";

// Mirror the application's TypeScript alias for Node's built-in test runner.
registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith("@/lib/")) {
      const url = new URL(`../${specifier.slice(2)}.ts`, import.meta.url);
      return nextResolve(url.href, context);
    }
    return nextResolve(specifier, context);
  },
});

const { getProject, projects, projectSections } =
  await import("../lib/projects.ts");

test("each project has a unique route and an existing local image", () => {
  assert.equal(new Set(projects.map(({ slug }) => slug)).size, projects.length);
  for (const project of projects) {
    assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.equal(getProject(project.slug), project);
    if (project.image) {
      assert.ok(
        existsSync(new URL(`../public${project.image}`, import.meta.url)),
      );
    }
  }
});

test("unknown and prototype-like slugs never resolve to a project", () => {
  for (const slug of [
    "missing-project",
    "__proto__",
    "constructor",
    "../soundmotion",
  ]) {
    assert.equal(getProject(slug), undefined);
  }
});

test("sections keep every project exactly once, with featured projects first", () => {
  const listedSlugs = projectSections.flatMap(({ projects: items }) =>
    items.map(({ slug }) => slug),
  );
  assert.deepEqual(
    [...listedSlugs].sort(),
    projects.map(({ slug }) => slug).sort(),
  );
  assert.deepEqual(
    projectSections[0].projects.map(({ slug }) => slug),
    ["fitai", "2048-reverse-engineering", "soundmotion", "developer-portfolio"],
  );
  for (const { projects: items } of projectSections) {
    assert.equal(new Set(items.map(({ category }) => category)).size, 1);
    const featured = items.map(({ featured }) => Boolean(featured));
    assert.deepEqual(featured, [...featured].sort().reverse());
  }
  assert.equal(projects[0].slug, "fitai");
});
