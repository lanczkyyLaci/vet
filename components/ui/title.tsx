import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

const variantClasses = {
  default: "text-slate-900",
  blue: "text-blue-600",
  teal: "text-teal-600",
  white: "text-white",
  muted: "text-slate-500",
} as const;

type TitleVariant = keyof typeof variantClasses;

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: TitleVariant;
  title?: string;
  children?: React.ReactNode;
}

const sizeClasses: Record<NonNullable<TitleProps["size"]>, string> = {
  xs: "text-base md:text-lg",
  sm: "text-lg md:text-xl",
  md: "text-xl md:text-2xl",
  lg: "text-3xl md:text-3xl",
  xl: "text-3xl md:text-4xl lg:text-5xl",
};

export const Title = ({
  as: Tag = "h2",
  size = "md",
  variant = "default",
  title,
  className,
  children,
  ...props
}: TitleProps) => {
  return (
    <Tag
      className={cn(
        "font-bold",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {title ?? children}
    </Tag>
  );
};
