import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className,type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
        type={type}
        data-slot="input"
        className={cn("flex h-10 w-full rounded-md border border-foreground/15 bg-transparent px-3 py-2 text-sm outline-none ring-0 transition focus:border-foreground/30 focus:ring-2 focus:ring-foreground/20", 
            className)}
        {...props}
    />
  )
}

export { Input }
