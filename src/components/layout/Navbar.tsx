'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <div
      className={clsx('sticky top-0 z-50 w-full bg-background', scrolled && 'shadow-[0_2px_12px_rgba(61,64,69,0.08)]')}
    >
      <nav className="container-ri h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-[24px] font-bold text-foreground">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image
              src="/icon-sm.png"
              alt=""
              aria-hidden
              width={64}
              height={64}
              className="inline-block rounded"
              priority
            />
            <span>Rumah Inggris</span>
          </Link>
        </div>

        {/* Center: Nav Links (desktop only) */}
        <ul className="hidden md:flex items-center gap-12 text-[16px] font-normal text-foreground">
          {[
            { href: '/kelas-online', label: 'Kelas Online' },
            { href: '/asrama', label: 'Asrama' },
            // { href: '#blog', label: 'Blog' },
            { href: '/kontak-kami', label: 'Kontak Kami' },
          ].map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-teak">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Hamburger (mobile) + Login CTA */}
        <div className="flex items-center gap-3">
          {/* Hamburger icon on mobile */}
          <button
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 relative"
          >
            {/* Animated burger to X */}
            <span
              className={
                'absolute block w-6 h-0.5 bg-foreground rounded transition-transform duration-400 ease-out ' +
                (open ? 'rotate-45 translate-y-0' : '-translate-y-2')
              }
            />
            <span
              className={
                'absolute block w-6 h-0.5 bg-foreground rounded transition-opacity duration-400 ease-out ' +
                (open ? 'opacity-0' : 'opacity-100')
              }
            />
            <span
              className={
                'absolute block w-6 h-0.5 bg-foreground rounded transition-transform duration-400 ease-out ' +
                (open ? '-rotate-45 translate-y-0' : 'translate-y-2')
              }
            />
          </button>
          <Link href="/login">
            <Button
              variant="secondary"
              className={clsx(
                'hidden! md:inline-flex! bg-padi text-background border-0 hover:opacity-95 px-6 py-3 h-auto rounded-lg font-bold text-[16px]'
              )}
              onClick={() => setOpen(false)}
            >
              Login
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={clsx(
          'md:hidden fixed inset-x-0 top-20 z-50 transition-all duration-500 ease-out origin-top',
          open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'
        )}
      >
        <div className="container-ri bg-[#F0F5F0] border-t border-teak/30 rounded-b-xl shadow-[0_8px_24px_rgba(61,64,69,0.08)] transition-transform duration-500 ease-out">
          <ul className="py-4">
            {[
              { href: '/kelas-online', label: 'Kelas Online' },
              { href: '/asrama', label: 'Asrama' },
              { href: '/kontak-kami', label: 'Kontak Kami' },
            ].map((l) => (
              <li key={l.href} className="">
                <Link
                  href={l.href}
                  className="block py-3 text-[16px] text-foreground hover:text-teak"
                  onClick={() => {
                    console.log({ l });
                    setOpen(false);
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pb-4 pt-1">
            {/* Login CTA move to login page */}
            <Link href="/login">
              <Button
                variant="secondary"
                className="w-full bg-padi text-background border-0 hover:opacity-95 px-6 py-3 h-auto rounded-lg font-bold text-[16px]"
                onClick={() => setOpen(false)}
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
