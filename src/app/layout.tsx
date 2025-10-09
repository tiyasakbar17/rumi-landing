import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

import MockProvider from "@/providers/MockProvider";
import { RootShell } from "@/components/layout/RootShell";
import { defaultMetadata } from "@/lib/seo";

export const metadata: Metadata = defaultMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakarta.variable} antialiased font-sans`}>
        <MockProvider>
          <RootShell>{children}</RootShell>
        </MockProvider>
      </body>
    </html>
  );
}
