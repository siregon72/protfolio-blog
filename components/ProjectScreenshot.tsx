"use client";

import Image from "next/image";
import { Dialog } from "@base-ui/react/dialog";
import { Expand, X } from "lucide-react";

export function ProjectScreenshot({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="min-w-0">
      <Dialog.Root>
        <Dialog.Trigger
          aria-label={`${caption} 확대 보기`}
          className="group relative flex w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 outline-none transition-colors hover:border-zinc-400 focus-visible:ring-2 focus-visible:ring-ring dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 1024px) 680px, (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
            className="h-auto max-h-96 w-auto max-w-full object-contain"
          />
          <span className="absolute right-2 bottom-2 flex size-8 items-center justify-center rounded-lg bg-zinc-950/80 text-white">
            <Expand aria-hidden="true" className="size-4" />
          </span>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-70 bg-black/75" />
          <Dialog.Popup className="fixed top-1/2 left-1/2 z-80 flex max-h-[calc(100dvh-2rem)] w-[calc(100%_-_2rem)] max-w-7xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-zinc-200 bg-background shadow-xl outline-none dark:border-zinc-800">
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
              <Dialog.Title className="text-sm font-medium">
                {caption}
              </Dialog.Title>
              <Dialog.Close
                aria-label="확대 이미지 닫기"
                className="flex size-10 shrink-0 items-center justify-center rounded-lg text-zinc-500 outline-none hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-ring dark:text-zinc-400 dark:hover:bg-zinc-900"
              >
                <X aria-hidden="true" className="size-5" />
              </Dialog.Close>
            </div>
            <Dialog.Description className="sr-only">
              {alt}. 아래 링크로 원본 크기의 이미지를 볼 수 있습니다.
            </Dialog.Description>
            <div className="min-h-0 overflow-auto overscroll-contain p-3 sm:p-5">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                unoptimized
                className="mx-auto h-auto max-h-[calc(100dvh-12rem)] w-auto max-w-full object-contain"
              />
            </div>
            <a
              href={src}
              target="_blank"
              rel="noreferrer noopener"
              className="shrink-0 border-t border-zinc-200 px-4 py-3 text-center text-sm text-zinc-500 underline underline-offset-4 outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring dark:border-zinc-800 dark:text-zinc-400"
            >
              원본 크기로 보기
            </a>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
      <figcaption className="mt-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
        {caption}
      </figcaption>
    </figure>
  );
}
