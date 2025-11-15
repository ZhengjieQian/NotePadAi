"use client";

import { useEffect, useRef, useState } from "react";

export default function LoginButton() {
  const [open, setOpen] = useState(false);
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

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Placeholder: no account logic yet
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
      )}
    </>
  );
}
