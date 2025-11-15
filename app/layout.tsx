import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NotePadAi",
  description: "Generated Your Note by NotePadAi",
  creator: "Zhengjie Qian",
  authors: [{ name: "Zhengjie Qian"}],
  keywords: ["Next.js", "Tailwind CSS", "NotePadAi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-background text-foreground antialiased m-0`}
      >
        {/* Decorative background glow */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-red-500/20 blur-3xl" />
        </div>

        <header className="absolute top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 w-full items-center justify-between px-4 md:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-2">
              <Image
                className="dark:invert"
                src="/logo.svg"
                alt="Logo"
                width={120}
                height={24}
                priority
              />
              <span className="sr-only">Home</span>
            </Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/preview/preview" className="text-foreground/80 hover:text-foreground">Preview</Link>

            </nav>
          </div>
          <div className="px-4 md:px-6 lg:px-8">
            <div className="h-px w-full bg-foreground/10" />
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 md:py-12">
          {children}
        </main>

        <footer className="w-full px-4 md:px-6 lg:px-8 py-8 text-sm text-foreground/60">
          <div className="flex items-center justify-between">
            <p>© {new Date().getFullYear()} NotePadAi</p>
            <p className="hidden sm:block">Built with Next.js and Tailwind</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
