import { cn } from "@/lib/utils"
import { type HTMLAttributes, forwardRef } from "react"
import { CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react"

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "warning" | "error" | "info"
  title?: string
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "info", title, children, ...props }, ref) => {
    const variants = {
      success: {
        container: "bg-[var(--color-success-light)] border-[var(--color-success)]",
        icon: CheckCircle,
        iconColor: "text-[var(--color-success)]",
      },
      warning: {
        container: "bg-[var(--color-warning-light)] border-[var(--color-warning)]",
        icon: AlertTriangle,
        iconColor: "text-[var(--color-warning)]",
      },
      error: {
        container: "bg-[var(--color-error-light)] border-[var(--color-error)]",
        icon: XCircle,
        iconColor: "text-[var(--color-error)]",
      },
      info: {
        container: "bg-[var(--color-info-light)] border-[var(--color-info)]",
        icon: Info,
        iconColor: "text-[var(--color-info)]",
      },
    }

    const { container, icon: Icon, iconColor } = variants[variant]

    return (
      <div ref={ref} className={cn("p-4 border-l-4 rounded-lg", container, className)} {...props}>
        <div className="flex items-start">
          <Icon className={cn("h-5 w-5 mt-0.5 mr-3", iconColor)} />
          <div className="flex-1">
            {title && <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">{title}</h4>}
            <div className="text-[var(--color-text-secondary)]">{children}</div>
          </div>
        </div>
      </div>
    )
  },
)

Alert.displayName = "Alert"

export { Alert }
