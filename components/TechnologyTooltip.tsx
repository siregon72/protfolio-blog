"use client";

import type { ReactNode } from "react";
import { Tooltip } from "@base-ui/react/tooltip";

export function TechnologyTooltipProvider({ children }: { children: ReactNode }) {
  return <Tooltip.Provider delay={0}>{children}</Tooltip.Provider>;
}

export function TechnologyTooltip({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger
        type="button"
        aria-label={name}
        className="group flex size-14 items-center justify-center rounded-2xl border border-zinc-200 bg-white outline-none transition-colors hover:border-zinc-400 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600"
      >
        {children}
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Positioner side="top" sideOffset={8} className="z-60">
          <Tooltip.Popup className="rounded-lg bg-zinc-950 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white shadow-md dark:bg-zinc-100 dark:text-zinc-950">
            {name}
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
