import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BackLinkProps {
    href: string
    label: string
    /** Az ikon pozíciója: "start" (szöveg előtt) vagy "end" (szöveg után) */
    iconPosition?: "start" | "end"
    /** Hover irány: "left" (balra mozdul) vagy "right" (jobbra mozdul) */
    hoverDirection?: "left" | "right"
    className?: string
}

export const BackLink = ({
    href,
    label,
    iconPosition = "start",
    hoverDirection = "left",
    className,
}: BackLinkProps) => {
    const Icon = iconPosition === "start" ? ArrowLeft : ArrowRight

    const iconElement = (
        <Icon
            className={cn(
                "h-4 w-4 transition-transform duration-150",
                hoverDirection === "left"
                    ? "group-hover:-translate-x-1"
                    : "group-hover:translate-x-1"
            )}
        />
    )

    const isAnchor = href.startsWith("#")
    const Comp = isAnchor ? "a" : Link

    return (
        <Comp
            href={href}
            className={cn(
                "group mb-8 inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-blue-600",
                className
            )}
        >
            {iconPosition === "start" && iconElement}
            {label}
            {iconPosition === "end" && iconElement}
        </Comp>
    )
}
