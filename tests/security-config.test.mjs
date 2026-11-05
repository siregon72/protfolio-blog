import assert from "node:assert/strict";
import test from "node:test";
import { hasLocalMatch } from "next/dist/shared/lib/match-local-pattern.js";
import { hasRemoteMatch } from "next/dist/shared/lib/match-remote-pattern.js";

const originalEnvironment = process.env.NODE_ENV;
process.env.NODE_ENV = "production";
const { default: productionConfig } =
  await import("../next.config.ts?production");
process.env.NODE_ENV = "development";
const { default: developmentConfig } =
  await import("../next.config.ts?development");
if (originalEnvironment === undefined) {
  delete process.env.NODE_ENV;
} else {
  process.env.NODE_ENV = originalEnvironment;
}

function getHeaders(config) {
  const [rule] = config.headers();
  assert.equal(rule.source, "/:path*");
  return Object.fromEntries(rule.headers.map(({ key, value }) => [key, value]));
}

test("production blocks framing, plugins, external connections and eval", () => {
  const headers = getHeaders(productionConfig);
  const policy = headers["Content-Security-Policy"];

  for (const directive of [
    "default-src 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "base-uri 'none'",
    "connect-src 'self'",
  ]) {
    assert.ok(policy.split("; ").includes(directive), directive);
  }
  assert.doesNotMatch(policy, /unsafe-eval|ws:|wss:/);
  assert.equal(headers["X-Content-Type-Options"], "nosniff");
  assert.equal(headers["X-Frame-Options"], "DENY");
  assert.equal(productionConfig.poweredByHeader, false);
});

test("development permits the debugger and hot reload connections", () => {
  const policy = getHeaders(developmentConfig)["Content-Security-Policy"];
  assert.match(policy, /'unsafe-eval'/);
  assert.match(policy, /connect-src 'self' ws: wss:/);
});

test("image optimization only accepts known local asset directories without queries", () => {
  const { localPatterns, remotePatterns = [] } = productionConfig.images;
  for (const path of [
    "/profile/devprofile.jpeg",
    "/projects/2048-reverse-engineering/patched-game.png",
    "/icons/react.svg",
  ]) {
    assert.equal(hasLocalMatch(localPatterns, path), true, path);
  }
  for (const path of [
    "/favicon.ico",
    "/private/image.png",
    "/projects/../private/image.png",
    "/profile/devprofile.jpeg?extra=1",
  ]) {
    assert.equal(hasLocalMatch(localPatterns, path), false, path);
  }
  assert.equal(
    hasRemoteMatch(
      [],
      remotePatterns,
      new URL("https://example.com/image.png"),
    ),
    false,
  );
});
