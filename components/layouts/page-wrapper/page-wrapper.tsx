import { cn } from "@/lib/utils";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return (
    <main
      className={cn(
        "min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 px-3 py-16",
        className
      )}
    >
      {children}
    </main>
  );
};
