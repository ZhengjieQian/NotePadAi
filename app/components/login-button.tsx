"use client";

import { useEffect, useRef, useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKeyDown);
    }
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  async function handleGoogleSignIn() {
    setError(null);
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (err) {
      console.error("Google sign in error:", err);
      setError("Failed to sign in with Google.");
      setIsLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-foreground/90 sm:w-[158px]"
        onClick={() => setOpen(true)}
      >
        Login
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-title"
            ref={dialogRef}
            className="w-full max-w-sm rounded-xl border border-foreground/10 bg-background p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 id="login-title" className="text-lg font-semibold">
                Login
              </h2>
              <button
                type="button"
                aria-label="Close"
                className="rounded p-1 text-foreground/70 hover:bg-foreground/10"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            {error && (
              <div className="mb-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <button
                type="button"
                disabled={isLoading}
                onClick={handleGoogleSignIn}
                className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-foreground/15 bg-background px-3 py-2 text-sm transition hover:bg-foreground/5 disabled:opacity-70"
              >
                <svg className="mr-1 h-4 w-4" viewBox="0 0 24 24" aria-hidden>
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                {isLoading ? "Signing in..." : "Continue with Google"}
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-foreground/60">Or</span>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setOpen(false);
                }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm text-foreground/80">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-foreground/15 bg-transparent px-3 py-2 text-sm outline-none ring-0 transition focus:border-foreground/30 focus:ring-2 focus:ring-foreground/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm text-foreground/80">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full rounded-md border border-foreground/15 bg-transparent px-3 py-2 text-sm outline-none ring-0 transition focus:border-foreground/30 focus:ring-2 focus:ring-foreground/20"
                  />
                </div>

                <div className="mt-6 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    className="h-9 rounded-md px-3 text-sm text-foreground hover:bg-foreground/10"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="h-9 rounded-md bg-foreground px-3 text-sm text-background transition-colors hover:bg-foreground/90"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
