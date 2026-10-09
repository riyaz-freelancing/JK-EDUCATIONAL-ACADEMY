import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-blue-600 text-white shadow hover:bg-blue-700",
        secondary:
          "border-transparent bg-blue-50 text-blue-700 hover:bg-blue-100",
        destructive:
          "border-transparent bg-red-100 text-red-700 hover:bg-red-200",
        outline: "border-slate-200 text-slate-700 hover:bg-slate-50",
        indigo: "border-transparent bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
        success: "border-transparent bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
