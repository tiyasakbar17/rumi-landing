"use client";

import * as React from "react";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={clsx(
        "sticky top-0 z-50 w-full bg-background",
        scrolled && "shadow-[0_2px_12px_rgba(61,64,69,0.08)]"
      )}
    >
      <nav className="container-ri h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-[24px] font-bold text-foreground">Rumah Inggris</div>

        {/* Center: Nav Links (desktop only) */}
        <ul className="hidden md:flex items-center gap-12 text-[16px] font-normal text-foreground">
          {[
            { href: "#courses", label: "Courses" },
            { href: "#dorm", label: "The Dorm" },
            { href: "#blog", label: "Blog" },
            { href: "#contact", label: "Contact" },
          ].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="transition-colors hover:text-teak"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Hamburger (mobile) + Login CTA */}
        <div className="flex items-center gap-3">
          {/* Hamburger icon on mobile */}
          <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10">
            <span className="block w-6 h-0.5 bg-foreground mb-1.5 rounded" />
            <span className="block w-6 h-0.5 bg-foreground mb-1.5 rounded" />
            <span className="block w-6 h-0.5 bg-foreground rounded" />
          </button>
          <Button
            variant="secondary"
            className="bg-padi text-background border-0 hover:opacity-95 px-6 py-3 h-auto rounded-lg font-bold text-[16px]"
          >
            Login
          </Button>
        </div>
      </nav>
    </div>
  );
}
