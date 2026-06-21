import { LoaderIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function Spinner({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn(
        "size-6 animate-spin text-red-500",
        className
      )}
      {...props}
    />
  );
}

export default function LoadingState({
  text = "Loading...",
}: {
  text?: string;
}) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-4">
      <Spinner />

      <p className="text-muted-foreground">
        {text}
      </p>
    </div>
  );
}