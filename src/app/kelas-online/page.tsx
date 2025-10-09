import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const dynamic = 'force-static';
export const metadata = {
  title: 'Kelas Online | Rumah Inggris',
  description:
    'Jalur pribadi menuju skor TOEFL impian. Semua alat, materi, dan dukungan yang Anda butuhkan, dapat diakses kapan saja, di mana saja.',
};

export default function KelasOnlinePage() {
  return (
    <div>
      {/* 1. Hero: Janji Platform */}
      <section aria-label="Janji Platform" className="relative w-full">
        {/* Visual: product hero image (dashboard on laptop over clean desk) */}
        <div className="hidden md:block absolute inset-0 z-0">
          <Image
            src="/online-dashboard.png"
            alt="Tampilan dashboard platform Rumah Inggris di laptop di atas meja minimalis"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-background/45" />
        </div>

        <div className="relative z-10 container-ri text-center py-[64px] md:py-[240px]">
          <div className="max-w-[900px] mx-auto">
            <h1 className="text-[32px] sm:text-[36px] md:text-[64px] leading-[1.2] font-bold text-foreground mb-6">
              Jalur Pribadi Anda Menuju Skor TOEFL Impian.
            </h1>
            <p className="text-[16px] md:text-[18px] leading-[1.7] text-foreground mb-8 md:mb-10 max-w-[700px] mx-auto">
              Semua alat, materi, dan dukungan yang Anda butuhkan, dapat diakses kapan saja, di mana saja.
            </p>
            <div className="flex justify-center">
              <Link href="/kelas-online/diagnostic" className="inline-block">
                <Button size="lg" className="min-w-[260px]">
                  Coba Tes Diagnostik Gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mengapa Platform Kami Berbeda: Fitur Unggulan */}
      <section className="w-full bg-background">
        <div className="container-ri py-[64px] md:py-[120px] space-y-16 md:space-y-24">
          {/* Fitur 1: Diagnostik yang Akurat (image left, text right) */}
          <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
            <div className="mb-8 md:mb-0">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-teak/30 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                <Image
                  src="/personal-toefl-analysis.png"
                  alt="Mockup Analisis Personal yang menampilkan hasil tes diagnostik"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-[24px] font-semibold text-foreground">Mulai dengan Memahami Diri Sendiri.</h3>
              <div className="w-[60px] h-[4px] bg-teak rounded-full mt-4 mb-6" />
              <p className="text-[18px] leading-[1.7] text-foreground/90">
                Tes diagnostik cerdas kami secara akurat menunjukkan area kekuatan Anda dan bagian mana yang paling
                membutuhkan perhatian. Tidak ada lagi belajar dengan menebak-nebak.
              </p>
            </div>
          </div>

          {/* Fitur 2: Pembelajaran yang Terfokus (image right, text left) */}
          <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
            <div className="md:order-2 mb-8 md:mb-0">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-teak/30 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                <Image
                  src="/feature-lesson.png"
                  alt="Mockup Pelajaran 10 Menit yang interaktif"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:order-1">
              <h3 className="text-[24px] font-semibold text-foreground">Pelajaran Efektif, Bukan Sekadar Teori.</h3>
              <div className="w-[60px] h-[4px] bg-teak rounded-full mt-4 mb-6" />
              <p className="text-[18px] leading-[1.7] text-foreground/90">
                Ucapkan selamat tinggal pada buku tebal yang membosankan. Modul belajar kami yang singkat dan interaktif
                dirancang untuk membangun pemahaman mendalam dengan cara yang menarik.
              </p>
            </div>
          </div>

          {/* Fitur 3: Lacak Kemajuan Anda (image left, text right) */}
          <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
            <div className="mb-8 md:mb-0">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-teak/30 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                <Image
                  src="/feature-progress.png"
                  alt="Mockup dashboard dengan progress bar dan metrik kemajuan belajar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-[24px] font-semibold text-foreground">Lihat Kemajuan Anda Secara Nyata.</h3>
              <div className="w-[60px] h-[4px] bg-teak rounded-full mt-4 mb-6" />
              <p className="text-[18px] leading-[1.7] text-foreground/90">
                Tetap termotivasi dengan melihat progress bar Anda terisi. Sistem kami membantu Anda melacak kemajuan
                secara visual, sehingga Anda selalu tahu seberapa dekat Anda dengan tujuan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Penawaran: Paket Nilai */}
      <section className="w-full bg-[#F0F5F0]">
        <div className="container-ri py-[64px] md:py-[120px] text-center">
          <h2 className="text-[48px] leading-[1.3] font-bold text-foreground mb-8">Mulai Perjalanan Anda Hari Ini.</h2>
          <div className="max-w-[720px] mx-auto">
            <Card padding="lg">
              <CardHeader className="mb-2">
                <CardTitle>Yang Anda Dapatkan</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-3 text-[18px] leading-[1.7] text-foreground/90 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 aspect-square items-center justify-center rounded-full bg-padi text-background text-[12px]">✓</span>
                    <span>Tes Diagnostik Gratis untuk memetakan kebutuhan Anda</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 aspect-square items-center justify-center rounded-full bg-padi text-background text-[12px]">✓</span>
                    <span>Analisis Personal yang jelas dan actionable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 aspect-square items-center justify-center rounded-full bg-padi text-background text-[12px]">✓</span>
                    <span>Pelajaran Pertama yang efektif dan langsung bisa diterapkan</span>
                  </li>
                </ul>
                <Link href="/kelas-online/daftar" className="inline-block">
                  <Button size="lg" className="min-w-[260px]">Daftar & Mulai Belajar</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
