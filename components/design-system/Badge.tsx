import { cn } from "@/lib/utils"
import { type HTMLAttributes, forwardRef } from "react"

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "success" | "warning" | "error" | "info" | "neutral"
  size?: "sm" | "md" | "lg"
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "neutral", size = "md", ...props }, ref) => {
    const variants = {
      success: "bg-[var(--color-success-light)] text-[var(--color-success)]",
      warning: "bg-[var(--color-warning-light)] text-[var(--color-warning)]",
      error: "bg-[var(--color-error-light)] text-[var(--color-error)]",
      info: "bg-[var(--color-info-light)] text-[var(--color-info)]",
      neutral: "bg-[var(--color-surface-alt)] text-[var(--color-text-secondary)]",
    }

    const sizes = {
      sm: "px-2 py-1 text-xs",
      md: "px-3 py-1 text-sm",
      lg: "px-4 py-2 text-base",
    }

    return (
      <span
        ref={ref}
        className={cn("inline-flex items-center font-medium rounded-full", variants[variant], sizes[size], className)}
        {...props}
      />
    )
  },
)

Badge.displayName = "Badge"

export { Badge }
