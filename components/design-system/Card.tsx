import { cn } from "@/lib/utils"
import { type HTMLAttributes, forwardRef } from "react"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined"
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[var(--shadow-sm)]",
    elevated: "bg-[var(--color-surface)] shadow-[var(--shadow-lg)]",
    outlined: "bg-[var(--color-surface)] border-2 border-[var(--color-border)]",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl transition-all duration-150 hover:shadow-[var(--shadow-md)]",
        variants[variant],
        className,
      )}
      {...props}
    />
  )
})

Card.displayName = "Card"

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pb-4", className)} {...props} />
))

CardHeader.displayName = "CardHeader"

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))

CardContent.displayName = "CardContent"

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-4 border-t border-[var(--color-border)]", className)} {...props} />
))

CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardContent, CardFooter }
