import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

export function Header() {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-center bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between border-b px-6 py-3 sm:px-10">
        <nav
          aria-label="주 메뉴"
          className="flex items-center gap-5 font-semibold"
        >
          <Link
            href="/"
            className="rounded-sm outline-none transition-opacity hover:opacity-60 focus-visible:ring-2 focus-visible:ring-ring"
          >
            sihoon
          </Link>
          <Link
            href="/projects"
            className="rounded-sm outline-none transition-opacity hover:opacity-60 focus-visible:ring-2 focus-visible:ring-ring"
          >
            Projects
          </Link>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
