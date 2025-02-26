import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-stroke", className)}
      {...props}
    />
  );
}

export { Skeleton };
