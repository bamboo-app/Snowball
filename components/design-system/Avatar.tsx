import { cn } from "@/lib/utils"
import { type HTMLAttributes, forwardRef } from "react"

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  status?: "online" | "offline" | "away" | "busy"
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, size = "md", status, ...props }, ref) => {
    const sizes = {
      xs: "h-6 w-6",
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
      xl: "h-16 w-16",
    }

    const statusColors = {
      online: "bg-[var(--color-success)]",
      offline: "bg-[var(--color-text-muted)]",
      away: "bg-[var(--color-warning)]",
      busy: "bg-[var(--color-error)]",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full bg-[var(--color-surface-alt)] overflow-hidden",
          sizes[size],
          className,
        )}
        {...props}
      >
        {src ? (
          <img src={src || "/placeholder.svg"} alt={alt || "Avatar"} className="h-full w-full object-cover" />
        ) : (
          <span className="text-[var(--color-text-muted)] font-medium">{alt?.charAt(0)?.toUpperCase() || "?"}</span>
        )}
        {status && (
          <span
            className={cn(
              "absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white",
              statusColors[status],
            )}
          />
        )}
      </div>
    )
  },
)

Avatar.displayName = "Avatar"

export { Avatar }
