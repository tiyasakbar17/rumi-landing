"use client";

import * as React from "react";
import clsx from "clsx";

type Item = {
  id: string;
  question: string;
  answer: React.ReactNode;
};

type AccordionProps = {
  items: Item[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = React.useState<string | null>(null);

  return (
    <div className={clsx("divide-y divide-teak/20 border border-padi/40 rounded-xl overflow-hidden", className)}>
      {items.map((it) => {
        const open = openId === it.id;
        return (
          <div key={it.id} className="bg-background">
            <button
              type="button"
              aria-expanded={open}
              aria-controls={`panel-${it.id}`}
              onClick={() => setOpenId((prev) => (prev === it.id ? null : it.id))}
              className={clsx(
                "w-full text-left px-5 py-4 flex items-center justify-between gap-4 transition-colors",
                "hover:bg-padi/10"
              )}
            >
              <span className="text-[20px] font-semibold text-foreground">{it.question}</span>
              <span
                className={clsx(
                  "inline-flex h-6 w-6 items-center justify-center rounded-md border border-teak/30 text-foreground transition-transform",
                  open && "rotate-45"
                )}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              id={`panel-${it.id}`}
              role="region"
              className={clsx(
                "px-5 pt-0 pb-5 text-[16px] text-foreground/90",
                open ? "block" : "hidden"
              )}
            >
              {it.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
