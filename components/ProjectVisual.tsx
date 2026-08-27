import Image from "next/image";
import { ImageIcon } from "lucide-react";

export function ProjectVisual({
  image,
  alt,
  className = "",
}: {
  image: string | null;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 ${className}`}
    >
      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 1120px, (min-width: 640px) 75vw, 100vw"
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={`${alt} 이미지 추가 영역`}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-zinc-400 dark:text-zinc-600"
        >
          <span className="flex size-12 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-zinc-950">
            <ImageIcon aria-hidden="true" className="size-5" />
          </span>
          <p className="text-sm font-medium">프로젝트 이미지</p>
        </div>
      )}
    </div>
  );
}
