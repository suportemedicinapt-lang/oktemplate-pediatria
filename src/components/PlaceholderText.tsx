import { cn } from "@/lib/utils";

interface PlaceholderTextProps {
  children: string;
  className?: string;
}

export const PlaceholderText = ({ children, className }: PlaceholderTextProps) => {
  return (
    <span className={cn("bg-primary-light text-primary px-2 py-0.5 rounded-md font-medium", className)}>
      {children}
    </span>
  );
};
