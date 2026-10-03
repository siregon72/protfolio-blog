import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProfileSection() {
  return (
    <section className="border-b border-zinc-200 pb-12 dark:border-zinc-800">
      <div className="grid items-center gap-8 sm:grid-cols-[10rem_1fr]">
        <div className="relative aspect-3/4 w-32 overflow-hidden rounded-2xl border border-zinc-200 bg-linear-to-br from-zinc-100 to-zinc-200 shadow-sm sm:w-40 dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900">
          <Image
            src="/profile/devprofile.jpeg"
            alt="프로필 사진"
            fill
            sizes="(min-width: 640px) 160px, 128px"
            preload
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight break-keep text-zinc-950 sm:text-5xl dark:text-zinc-50">
            안녕하세요,
            <br />
            <span className="inline-block bg-linear-to-r from-zinc-950 to-zinc-950/20 bg-clip-text text-transparent dark:from-white dark:to-white/20">
              리버스 엔지니어&nbsp;
            </span>
            최시훈입니다.
          </h1>
          <p className="mt-4 max-w-3xl leading-7">
            웹 서비스를 만들며, 리버스 엔지니어링을 공부하고 있습니다.
          </p>
          <div className="mt-10">
            <div className="mt-3 flex items-center gap-2">
              <Image
                src="/icons/gbsw.webp"
                alt="경북소프트웨어마이스터고등학교 로고"
                width={24}
                height={24}
                className="size-6 rounded-md"
              />
              <p className="text-zinc-500 dark:text-zinc-400">
                경북소프트웨어마이스터고등학교
              </p>
            </div>
            <a
              href="https://github.com/siregon72"
              target="_blank"
              rel="noreferrer noopener"
              className="group mt-3 inline-flex min-h-10 items-center gap-2 rounded-md text-zinc-500 transition-colors hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 dark:text-zinc-400 dark:hover:text-zinc-50 dark:focus-visible:ring-offset-zinc-950"
            >
              <span className="flex size-6 items-center justify-center">
                <Image
                  src="/icons/github.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 opacity-60 transition-opacity group-hover:opacity-100 dark:invert"
                />
              </span>
              GitHub
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
