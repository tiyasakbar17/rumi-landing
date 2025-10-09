"use client";

import * as React from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: Integrate real API via fetchJson from src/lib/api.ts
      await new Promise((r) => setTimeout(r, 800));
      setSent(true);
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-padi p-6 bg-background">
        <h4 className="text-[20px] font-semibold text-foreground mb-2">Terima kasih!</h4>
        <p className="text-[16px] leading-[1.7] text-foreground/90">
          Pesan Anda telah kami terima. Tim kami akan segera menghubungi Anda dalam 1-2 hari kerja.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-[14px] text-foreground/80 mb-2" htmlFor="name">
          Nama Lengkap
        </label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Nama lengkap Anda"
          className="bg-transparent border-padi focus-visible:ring-padi focus-visible:ring-2"
        />
      </div>

      <div>
        <label className="block text-[14px] text-foreground/80 mb-2" htmlFor="email">
          Alamat Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="nama@contoh.com"
          className="bg-transparent border-padi focus-visible:ring-padi focus-visible:ring-2"
        />
      </div>

      <div>
        <label className="block text-[14px] text-foreground/80 mb-2" htmlFor="subject">
          Subjek
        </label>
        <Input
          id="subject"
          name="subject"
          required
          placeholder="Topik pesan"
          className="bg-transparent border-padi focus-visible:ring-padi focus-visible:ring-2"
        />
      </div>

      <div>
        <label className="block text-[14px] text-foreground/80 mb-2" htmlFor="message">
          Pesan Anda
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tulis pesan Anda di sini..."
          className="w-full rounded-md border border-padi bg-transparent text-foreground placeholder:text-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-padi text-[16px] p-3"
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? "Mengirim..." : "Kirim Pesan"}
      </Button>
    </form>
  );
}
