import Image from "next/image";
import type { Technology } from "@/lib/technologies";
import { cn } from "@/lib/utils";

type TechnologyIconProps = {
  technology: Technology;
  size?: number;
  className?: string;
};

export function TechnologyIcon({
  technology,
  size = 24,
  className,
}: TechnologyIconProps) {
  if (technology.icon) {
    return (
      <Image
        src={technology.icon}
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        className={cn(
          "shrink-0 object-contain",
          technology.iconClassName,
          className,
        )}
      />
    );
  }

  if (!technology.text) return null;

  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size }}
      className={cn(
        "flex shrink-0 items-center justify-center text-sm font-semibold tracking-[0.08em] text-zinc-900 dark:text-zinc-100",
        className,
      )}
    >
      {technology.text}
    </span>
  );
}
