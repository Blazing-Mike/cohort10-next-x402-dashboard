"use client";

import Link from "next/link";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ToggleGroupExample() {
  return (
    <section id="toggle-group">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="type-heading-md">Toggle Group</h2>
        <div className="flex items-center gap-4">
          <Link
            href="#examples-top"
            className="type-body-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top ↑
          </Link>
          <Link
            href="https://github.com/raid-guild/brand/blob/main/src/components/ui/toggle-group.tsx"
            className="type-body-sm text-primary hover:text-primary/80 transition-colors underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code →
          </Link>
          <Link
            href="https://github.com/raid-guild/brand/blob/main/src/components/examples/ToggleGroupExample.tsx"
            className="type-body-sm text-primary hover:text-primary/80 transition-colors underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Example code →
          </Link>
        </div>
      </div>
      <div className="space-y-6">
        <div className="p-6 border border-border rounded-lg">
          <h3 className="type-heading-sm mb-4">Basic Toggle Group</h3>
          <ToggleGroup type="single" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Align left">
              Left
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              Center
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              Right
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="p-6 border border-border rounded-lg">
          <h3 className="type-heading-sm mb-4">Multiple Selection Toggle Group</h3>
          <ToggleGroup type="multiple" defaultValue={["bold"]}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              Bold
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              Italic
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              Underline
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </section>
  );
}

