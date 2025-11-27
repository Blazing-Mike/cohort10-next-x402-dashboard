"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-full h-full", className)}
    {...props}
  />
));
ChartContainer.displayName = "ChartContainer";

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-md border bg-popover p-2 text-sm text-popover-foreground shadow-md",
      className
    )}
    {...props}
  />
));
ChartTooltipContent.displayName = "ChartTooltipContent";

export { ChartContainer, ChartTooltipContent };

