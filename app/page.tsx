import Image from "next/image";
import Link from "next/link";
import LoginButton from "./components/login-button";

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
              <LoginButton />
              <Link
                className="flex h-12 w-full items-center justify-center rounded-full border border-foreground/15 px-5 text-foreground transition-colors hover:bg-foreground/5 sm:w-[158px]"
                href="/example"
              >
                Try it Now
              </Link>
            </div>
          </div>
      </section>
    </div>
  );
}
