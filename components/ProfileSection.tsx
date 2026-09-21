import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="border-b border-zinc-200 pb-12 dark:border-zinc-800">
      <div className="grid items-center gap-8 sm:grid-cols-[10rem_1fr]">
        <div className="relative aspect-3/4 w-32 overflow-hidden rounded-2xl border border-zinc-200 bg-linear-to-br from-zinc-100 to-zinc-200 shadow-sm sm:w-40 dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900">
          <Image
            src="/profile/devprofile.jpeg"
            alt="프로필 사진"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            안녕하세요,
            <br />
            <span className="bg-linear-to-r from-zinc-950 to-zinc-950/20 bg-clip-text text-transparent dark:from-white dark:to-white/20">
              리버스 엔지니어&nbsp;
            </span>
            최시훈입니다.
          </h1>
          <p className="mt-4 max-w-3xl leading-7 ">
            코드의 동작 원리를 분석하고, 보이지 않는 내부 구조를 이해하는 과정을
            좋아하는 리버스 엔지니어입니다.
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
          </div>
        </div>
      </div>
    </section>
  );
}
