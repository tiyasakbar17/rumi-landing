import { ContactForm } from '@/components/sections/Contact/ContactForm';

export const dynamic = 'force-static';
export const metadata = {
  title: 'Kontak Kami | Rumah Inggris',
  description:
    'Hubungi Rumah Inggris untuk pertanyaan program, jadwalkan kunjungan, atau konsultasi. Kami siap membantu Anda.',
};

export default function KontakKamiPage() {
  return (
    <div>
      {/* 1. Header Halaman */}
      <section className="w-full bg-background">
        <div className="container-ri text-center pt-[120px] pb-[80px]">
          <h1 className="text-[32px] md:text-[64px] leading-[1.2] font-bold text-foreground mb-6">Kami Siap Membantu</h1>
          <p className="text-[14px] md:text-[16px] leading-[1.7] text-foreground/90 max-w-[750px] mx-auto">
            Punya pertanyaan tentang program kami atau ingin menjadwalkan kunjungan? Silakan hubungi kami melalui
            formulir di bawah ini atau kunjungi kami secara langsung.
          </p>
        </div>
      </section>

      {/* 2. Konten Utama: Formulir & Informasi */}
      <section className="w-full bg-background">
        <div className="container-ri py-[64px] md:py-[120px] md:grid md:grid-cols-2 md:gap-12 md:items-start">
          {/* Left: Formulir Kontak */}
          <div className="order-1">
            <h3 className="text-[20px] md:text-[24px] font-semibold text-foreground mb-4">Kirim Pesan kepada Kami</h3>
            <ContactForm />
          </div>

          {/* Right: Informasi & Lokasi */}
          <div className="order-2 mt-10 md:mt-0">
            <h3 className="text-[20px] md:text-[24px] font-semibold text-foreground mb-4">Kunjungi Rumah Kami</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="mt-1" aria-hidden>
                  📍
                </span>
                <p className="text-[14px] md:text-[16px] leading-[1.7] text-foreground/90">
                  Alamat lengkap Rumah Inggris
                  <br />
                  Gg. Nusa Indah 2, Way Huwi,
                  <br />
                  Kec. Jati Agung, Kota Bandar Lampung,
                  <br />
                  Lampung 35131
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1" aria-hidden>
                  ✉️
                </span>
                <a href="mailto:info@rumahinggris.cc" className="text-[14px] md:text-[16px] leading-[1.7] text-foreground underline">
                  info@rumahinggris.cc
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1" aria-hidden>
                  📞
                </span>
                <a href="https://wa.me/6281284914453" className="text-[14px] md:text-[16px] leading-[1.7] text-foreground underline">
                  +62 812-8491-4453
                </a>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="rounded-xl overflow-hidden border border-teak/30">
              <iframe
                title="Lokasi Rumah Inggris"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8047.380766944172!2d105.28884077884719!3d-5.360082821508513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c5863e0b4201%3A0x302bb7a6654e7dce!2sRUMAH%20INGGRIS%20PULAU%20DAMAR!5e0!3m2!1sid!2sid!4v1760023374319!5m2!1sid!2sid"
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
