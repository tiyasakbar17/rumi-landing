import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { FasilitasGallery } from '@/components/sections/Asrama/FasilitasGallery';

export const dynamic = 'force-static';
export const metadata = {
  title: 'Asrama | Rumah Inggris',
  description:
    'Lebih dari sekadar tempat belajar. Temukan ruang yang dirancang untuk fokus, komunitas, dan kesuksesan setiap siswa.',
};

export default function DormPage() {
  return (
    <div>
      {/* 1. Hero: The Vision */}
      <section aria-label="Visi Asrama" className="relative w-full min-h-[60vh] md:min-h-[70vh]">
        {/* Background image - full width */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/study1.jpg"
            alt="Ruang komunal dorm Rumah Inggris yang hangat dan profesional"
            fill
            priority
            className="object-cover"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="relative z-10 container-ri flex items-center justify-center text-center py-[64px] md:py-[120px] min-h-[inherit]">
          <div className="max-w-[900px] mx-auto">
            <h1 className="text-[64px] leading-[1.2] font-bold text-background mb-6">
              Bukan Sekadar Tempat Belajar. Sebuah Rumah untuk Bertumbuh.
            </h1>
            <p className="text-[20px] leading-[1.7] text-background">
              Temukan ruang yang dirancang untuk fokus, komunitas, dan kesuksesan setiap siswa.
            </p>
          </div>
        </div>
      </section>

      {/* 2. The Founder's Note: The 'Why' Behind the 'Rumah' */}
      <section className="w-full bg-background">
        <div className="container-ri py-[64px] md:py-[120px] md:grid md:grid-cols-[2fr_3fr] md:gap-12 md:items-center">
          {/* Left: Founder photo (40%) */}
          <div className="mb-8 md:mb-0">
            <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto rounded-xl overflow-hidden border border-teak/30 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
              <Image
                src="/founder.jpg"
                alt="Pendiri Rumah Inggris — senyum hangat dan bersahabat"
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          </div>

          {/* Right: Copy (60%) */}
          <div>
            <h2 className="text-[48px] leading-[1.3] font-bold text-foreground">Filosofi Kami</h2>
            <div className="w-[60px] h-[4px] bg-teak rounded-full mt-4 mb-6" />
            <p className="text-[18px] leading-[1.7] text-foreground/90">
              Saya membangun Rumah Inggris dengan keyakinan sederhana: bahwa pembelajaran sejati tumbuh dalam lingkungan
              yang suportif, bukan penuh tekanan. Sebagai seseorang yang juga melalui tantangan mempelajari bahasa, saya
              ingin membangun lebih dari sekadar kursus—saya ingin membangun sebuah rumah. Tempat di mana setiap siswa
              merasa dilihat, didukung, dan diberdayakan untuk meraih impian mereka. Di sini, kemajuan tidak dikejar
              dengan panik; ia dibangun secara konsisten, dengan kehangatan komunitas dan bimbingan mentor yang peduli.
            </p>

            <div className="mt-8">
              <p className="text-[14px] italic leading-[1.7] text-foreground/90">
                "Saya berusaha sebisa mungkin mengajak teman-teman yang memiliki visi jauh kedepan untuk belajar bersama
                sebagai keluarga dengan biaya yang terjangkau bagi mereka"
              </p>
              <div className="text-[20px] italic text-foreground/90">Alfatih Novriadi</div>
              <div className="text-[16px] text-foreground/70">Founder, Rumah Inggris</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Fasilitas: Lingkungan yang Dibangun untuk Sukses */}
      <section className="w-full bg-background">
        <div className="container-ri py-[64px] md:py-[120px]">
          <h2 className="text-[48px] leading-[1.3] font-bold text-foreground text-center mb-8">
            Dirancang untuk Fokus, Kenyamanan, dan Komunitas.
          </h2>
          <div className="max-w-[1140px] mx-auto">
            <FasilitasGallery
              items={[
                {
                  src: '/study1.jpg',
                  alt: 'Aula belajar yang hangat dan nyaman',
                  caption: 'Ruang Belajar yang Tenang & Terang',
                },
                {
                  src: '/study-room.jpg',
                  alt: 'Ruang belajar yang terang dan rapi',
                  caption: 'Ruang Belajar yang Tenang & Terang',
                },
                {
                  src: '/kitchen.jpg',
                  alt: 'Dapur komunal lengkap dan bersih',
                  caption: 'Dapur Komunal Lengkap',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 4. Komunitas: Tim Sukses Anda */}
      <section className="w-full bg-padi/10">
        <div className="container-ri py-[64px] md:py-[120px] md:grid md:grid-cols-2 md:gap-12 md:items-center">
          {/* Left: Community photo */}
          <div className="mb-8 md:mb-0">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-teak/30 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
              <Image
                src="/class.webp"
                alt="Suasana komunitas belajar yang hangat dan saling mendukung"
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          </div>

          {/* Right: Text and Quote */}
          <div>
            <h3 className="text-[24px] font-semibold text-foreground">Belajar dan Bertumbuh, Bersama.</h3>
            <div className="w-[60px] h-[4px] bg-teak rounded-full mt-4 mb-6" />
            <p className="text-[18px] leading-[1.7] text-foreground/90 mb-6">
              Kesuksesan bukanlah perjalanan seorang diri. Di Rumah Inggris, Anda akan dikelilingi oleh rekan-rekan yang
              ambisius dan mentor yang suportif.
            </p>
            <Card>
              <CardContent>
                <p className="italic text-[16px] leading-[1.7] text-foreground">
                  “Komunitas di sini adalah rahasia kesuksesan saya. Kami berlatih bersama setiap hari.”
                </p>
                <div className="mt-4 text-[14px] text-foreground/70">— Siswa Asrama</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Detail Program: Semua yang Perlu Anda Ketahui */}
      <section className="w-full bg-background">
        <div className="container-ri py-[64px] md:py-[120px]">
          <h2 className="text-[48px] leading-[1.3] font-bold text-foreground text-center mb-8">
            Pengalaman Belajar dan Tinggal yang Lengkap.
          </h2>
          <div className="max-w-[800px] mx-auto">
            <Accordion
              items={[
                {
                  id: 'fasilitas-termasuk',
                  question: 'Fasilitas apa saja yang termasuk?',
                  answer: (
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Kamar pribadi/berbagi yang nyaman</li>
                      <li>Ruang belajar tenang dan terang</li>
                      <li>Dapur komunal lengkap & area makan</li>
                      <li>Wi‑Fi cepat & area komunal</li>
                      <li>Sesi mentoring & kegiatan komunitas terjadwal</li>
                    </ul>
                  ),
                },
                {
                  id: 'jadwal-harian',
                  question: 'Seperti apa jadwal harian siswa?',
                  answer: (
                    <p>
                      Jadwal terstruktur dengan blok belajar fokus, sesi praktik speaking, review mandiri, dan waktu
                      istirahat yang cukup. Akhir pekan diisi dengan simulasi dan kegiatan komunitas ringan.
                    </p>
                  ),
                },
                {
                  id: 'lokasi',
                  question: 'Di mana lokasi kami?',
                  answer: (
                    <p>
                      Kami berlokasi di area yang tenang dan mudah dijangkau. Detail alamat lengkap akan kami kirimkan
                      setelah pendaftaran minat.
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 6. Undangan: CTA Final */}
      <section className="w-full bg-padi">
        <div className="container-ri py-[64px] md:py-[120px] text-center">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-[48px] leading-[1.3] font-bold text-background mb-8">
              Siap Menemukan Tempat Anda di Rumah Inggris?
            </h2>
            <Button size="lg" className="min-w-[260px]">
              Konsultasi dengan Tim Kami
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
