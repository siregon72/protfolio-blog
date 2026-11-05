export type Technology = {
  name: string;
  icon?: string;
  iconClassName?: string;
  text?: string;
};

const technologyCatalog: Record<string, Technology> = {
  assembly: { name: "Assembly", text: "ASM" },
  c: { name: "C", icon: "/icons/c.svg" },
  "next.js": { name: "Next.js", icon: "/icons/nextjs.svg" },
  react: { name: "React", icon: "/icons/react.svg" },
  typescript: { name: "TypeScript", icon: "/icons/typescript.svg" },
  flutter: { name: "Flutter", icon: "/icons/flutter.svg" },
  dart: { name: "Dart", icon: "/icons/dart.svg" },
  geminiapi: { name: "Gemini API", icon: "/icons/gemini.svg" },
  openaiapi: {
    name: "OpenAI API",
    icon: "/icons/openai.svg",
    iconClassName: "dark:invert",
  },
  tailwindcss: { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
  linux: { name: "Linux", icon: "/icons/linux-original.svg" },
  postgresql: { name: "PostgreSQL", icon: "/icons/postgresql-plain.svg" },
  docker: { name: "Docker", icon: "/icons/docker-plain.svg" },
  fedora: { name: "Fedora", icon: "/icons/fedora-plain.svg" },
  kalilinux: { name: "Kali Linux", icon: "/icons/kalilinux-original.svg" },
  sveltekit: { name: "SvelteKit", icon: "/icons/svelte.svg" },
  svelte: { name: "Svelte", icon: "/icons/svelte.svg" },
  rust: { name: "Rust", icon: "/icons/rust.svg", iconClassName: "dark:invert" },
  vercel: {
    name: "Vercel",
    icon: "/icons/vercel.svg",
    iconClassName: "dark:invert",
  },
  cloudflare: { name: "Cloudflare", icon: "/icons/cloudflare.svg" },
  python: { name: "Python", icon: "/icons/python-original.svg" },
  flask: {
    name: "Flask",
    icon: "/icons/flask-original.svg",
    iconClassName: "dark:invert",
  },
  supabase: { name: "Supabase", icon: "/icons/supabase.svg" },
  sqlite: { name: "SQLite", icon: "/icons/sqlite.svg" },
  java: { name: "Java", icon: "/icons/java.svg" },
  javascript: { name: "JavaScript", icon: "/icons/javascript.svg" },
  gradle: {
    name: "Gradle",
    icon: "/icons/gradle.svg",
    iconClassName: "dark:brightness-0 dark:invert",
  },
  github: {
    name: "GitHub",
    icon: "/icons/github.svg",
    iconClassName: "dark:invert",
  },
};

export function getTechnology(name: string): Technology {
  const key = name
    .trim()
    .replace(/\s+\d+(?:\.\d+)*$/, "")
    .replace(/\s+/g, "")
    .toLowerCase();

  return Object.hasOwn(technologyCatalog, key)
    ? technologyCatalog[key]
    : { name };
}
