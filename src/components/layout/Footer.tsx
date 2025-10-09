import * as React from 'react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="w-full bg-foreground text-background">
      <div className="container-ri pt-[64px] pb-[32px]">
        {/* Top separator within container width */}
        <div aria-hidden className="h-px w-full bg-teak mb-8" />
        <div className="grid gap-10 md:grid-cols-4">
          {/* Col 1: Logo + mission */}
          <div>
            <div className="text-[24px] font-bold inline-flex items-center gap-2">
              <Image src="/icon-sm.png" alt="" aria-hidden width={56} height={56} className="inline-block rounded" />
              <span>Rumah Inggris</span>
            </div>
            <p className="text-[16px] leading-[1.7] text-background/90">
              Membangun ketenangan dan kepercayaan diri dalam belajar TOEFL melalui komunitas, mentor, dan teknologi.
            </p>
          </div>
          {/* Col 2: Quick Links */}
          <div>
            <div className="text-[16px] font-semibold mb-4">Tautan Cepat</div>
            <ul className="space-y-3 text-[16px]">
              <li>
                <a href="/kelas-online" className="hover:underline">
                  Kelas Online
                </a>
              </li>
              <li>
                <a href="/asrama" className="hover:underline">
                  Asrama
                </a>
              </li>
              {/* <li><a href="/blog" className="hover:underline">Blog</a></li> */}
              <li>
                <a href="/kontak-kami" className="hover:underline">
                  Kontak Kami
                </a>
              </li>
            </ul>
          </div>
          {/* Col 3: Contact */}
          <div>
            <div className="text-[16px] font-semibold mb-4">Kontak</div>
            <ul className="space-y-3 text-[16px]">
              <li>Gg. Nusa Indah 2, Way Huwi, Kec. Jati Agung, Kota Bandar Lampung, Lampung 35131</li>
              <li>+62 812-8491-4453</li>
              <li>info@rumahinggris.cc</li>
            </ul>
          </div>
          {/* Col 4: Social */}
          <div>
            <div className="text-[16px] font-semibold mb-4">Sosial</div>
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                aria-label="Instagram"
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-teak/40 hover:bg-teak hover:text-background transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 2a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                aria-label="Facebook"
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-teak/40 hover:bg-teak hover:text-background transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 1.87 6.48 1.87 12.07c0 5.02 3.66 9.19 8.44 9.98v-7.06H7.9v-2.92h2.41V9.41c0-2.38 1.42-3.7 3.59-3.7 1.04 0 2.12.19 2.12.19v2.34h-1.19c-1.17 0-1.54.73-1.54 1.48v1.78h2.63l-.42 2.92h-2.21v7.06c4.78-.79 8.44-4.96 8.44-9.98z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-teak/40 text-center">
          <div className="text-[14px]">© 2015 Rumah Inggris. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
