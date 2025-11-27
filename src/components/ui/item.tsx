import * as React from "react";
import { cn } from "@/lib/utils";

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "compact" | "spacious";
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-accent hover:text-accent-foreground",
          variant === "compact" && "p-2 gap-2",
          variant === "spacious" && "p-4 gap-4",
          className
        )}
        {...props}
      />
    );
  }
);
Item.displayName = "Item";

export { Item };

