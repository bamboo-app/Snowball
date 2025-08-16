import { cn } from "@/lib/utils"
import { type InputHTMLAttributes, forwardRef } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, label, error, helperText, ...props }, ref) => {
  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-[var(--color-text-primary)]">{label}</label>}
      <input
        ref={ref}
        className={cn(
          "w-full px-4 py-3 border rounded-lg bg-[var(--color-surface)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2",
          error
            ? "border-[var(--color-error)] focus:ring-[var(--color-error)]"
            : "border-[var(--color-border)] focus:ring-[var(--color-primary)] focus:border-transparent",
          className,
        )}
        {...props}
      />
      {error && <p className="text-sm text-[var(--color-error)]">{error}</p>}
      {helperText && !error && <p className="text-sm text-[var(--color-text-muted)]">{helperText}</p>}
    </div>
  )
})

Input.displayName = "Input"

export { Input }
