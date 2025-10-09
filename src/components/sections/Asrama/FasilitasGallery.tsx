"use client";

import * as React from "react";
import Image from "next/image";
import clsx from "clsx";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

type FasilitasGalleryProps = {
  items: GalleryItem[]; // expecting at least 3: [heroLeft, topRight, bottomRight]
};

export function FasilitasGallery({ items }: FasilitasGalleryProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const open = (idx: number) => setOpenIndex(idx);
  const close = () => setOpenIndex(null);
  const next = () => setOpenIndex((i) => (i == null ? 0 : (i + 1) % items.length));
  const prev = () => setOpenIndex((i) => (i == null ? 0 : (i - 1 + items.length) % items.length));

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (openIndex == null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  const [hero, rightTop, rightBottom] = [items[0], items[1], items[2]];

  return (
    <div>
      {/* Magazine layout */}
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-4">
        {/* Left hero image */}
        <button
          type="button"
          onClick={() => open(0)}
          className="group relative w-full md:w-auto md:h-full aspect-[16/11] overflow-hidden rounded-xl border border-teak/30 shadow-[0_8px_24px_rgba(0,0,0,0.08)] md:-left-[120px]"
        >
          <Image src={hero.src} alt={hero.alt} fill className="object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="inline-block bg-foreground/70 text-background text-[14px] px-3 py-1 rounded-md">
              {hero.caption}
            </span>
          </div>
        </button>

        {/* Right stack */}
        <div className="grid gap-4">
          <button
            type="button"
            onClick={() => open(1)}
            className="group relative w-full md:w-auto md:h-[70%] md:rotate-[1.25deg] aspect-[16/9] overflow-hidden rounded-xl border border-teak/30 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
          >
            <Image src={rightTop.src} alt={rightTop.alt} fill className="object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="inline-block bg-foreground/70 text-background text-[14px] px-3 py-1 rounded-md">
                {rightTop.caption}
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => open(2)}
            className="group relative w-full md:w-auto md:h-[70%] md:-rotate-[1.25deg] aspect-[16/9] overflow-hidden rounded-xl border border-teak/30 shadow-[0_8px_24px_rgba(0,0,0,0.08)] md:bottom-[40%]"
          >
            <Image src={rightBottom.src} alt={rightBottom.alt} fill className="object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="inline-block bg-foreground/70 text-background text-[14px] px-3 py-1 rounded-md">
                {rightBottom.caption}
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <div
        className={clsx(
          "fixed inset-0 z-[60] flex items-center justify-center p-4 transition-opacity",
          openIndex != null ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={openIndex == null}
      >
        <div className="absolute inset-0 bg-black/80" onClick={close} />
        {openIndex != null && (
          <div className="relative z-[61] w-full max-w-5xl aspect-[16/9]">
            <Image
              src={items[openIndex].src}
              alt={items[openIndex].alt}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            {/* Caption */}
            <div className="absolute left-4 bottom-4 bg-foreground/70 text-background text-[14px] px-3 py-1 rounded-md">
              {items[openIndex].caption}
            </div>
            {/* Controls */}
            <button
              aria-label="Tutup galeri"
              onClick={close}
              className="absolute top-3 right-3 h-10 w-10 rounded-full bg-black/50 text-background grid place-items-center hover:bg-black/60"
            >
              ✕
            </button>
            <button
              aria-label="Sebelumnya"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/50 text-background grid place-items-center hover:bg-black/60"
            >
              ‹
            </button>
            <button
              aria-label="Berikutnya"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/50 text-background grid place-items-center hover:bg-black/60"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
