import React from "react";
import { cn } from "@/lib/utils";

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
} as const;

type DescriptionSize = keyof typeof sizeClasses;

interface DescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: DescriptionSize;
  mdSize?: DescriptionSize;
  lgSize?: DescriptionSize;
  children: React.ReactNode;
}

const mdSizeClasses: Record<DescriptionSize, string> = {
  xs: "md:text-xs",
  sm: "md:text-sm",
  md: "md:text-base",
  lg: "md:text-lg",
  xl: "md:text-xl",
};

const lgSizeClasses: Record<DescriptionSize, string> = {
  xs: "lg:text-xs",
  sm: "lg:text-sm",
  md: "lg:text-base",
  lg: "lg:text-lg",
  xl: "lg:text-xl",
};

export const Description = ({
  size = "md",
  mdSize,
  lgSize,
  className,
  children,
  ...props
}: DescriptionProps) => {
  return (
    <p
      className={cn(
        "text-slate-600",
        sizeClasses[size],
        mdSize && mdSizeClasses[mdSize],
        lgSize && lgSizeClasses[lgSize],
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
