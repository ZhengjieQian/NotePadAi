import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <section className="mx-auto max-w-5xl px-2 py-8 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Help you {""}
            <span className="inline bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Understand Anything.
            </span>
          </h1>
          <p className="mt-4 text-pretty text-lg leading-8 text-foreground/70 md:text-xl">
            Your research and thinking partner, grounded in the information you trust,
            built with the latest models.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-foreground/90 sm:w-[158px]"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              Deploy Now
            </a>
            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-foreground/15 px-5 text-foreground transition-colors hover:bg-foreground/5 sm:w-[158px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
