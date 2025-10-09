"use client";

import * as React from "react";
import clsx from "clsx";

type InputSize = "sm" | "md" | "lg";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  size?: InputSize;
};

const sizes: Record<InputSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-3 text-sm",
  lg: "h-11 px-4 text-base",
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size = "md", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "w-full rounded-md border border-foreground/20 bg-transparent text-foreground placeholder:text-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30",
          sizes[size as InputSize],
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
