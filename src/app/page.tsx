import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const dynamic = "force-static";
export const metadata = {
  title: "Rumah Inggris: Jalan Tenang Mencapai Skor TOEFL Tinggi",
  description:
    "Bosan dengan belajar TOEFL yang penuh tekanan? Rumah Inggris menawarkan platform terstruktur dan komunitas suportif untuk membantu Anda meraih skor impian dengan tenang dan percaya diri.",
};

export default function Home() {
  return (
    <div>
      {/* 1. Navigation handled globally. Hero: The Promise of Calm */}
      <section aria-label="Janji ketenangan" className="relative w-full md:min-h-[calc(100vh-80px)] flex items-center justify-center">
        {/* Full-bleed background image only on md+ to prevent blocking mobile */}
        <div className="hidden md:block absolute inset-0 z-0">
          <Image
            src="/hero.svg"
            alt="Siswa belajar TOEFL dengan tenang di lingkungan Rumah Inggris yang nyaman"
            fill
            priority
            className="object-cover object-[50%_0%] opacity-90"
          />
          <div className="absolute inset-0 bg-background/15" />
        </div>
        <div className="relative z-10 container-ri text-center py-14 md:py-16">
          <div className="max-w-[800px] mx-auto">
            <h1 className="text-[32px] sm:text-[36px] md:text-[64px] leading-[1.2] font-bold text-foreground mb-6">
              Jalan Tenang Menuju Skor TOEFL Impian Anda.
            </h1>
            <p className="text-[16px] md:text-[18px] leading-[1.7] text-foreground mb-10 md:mb-12 max-w-[600px] mx-auto">
              Platform belajar terstruktur dan komunitas suportif kami dirancang untuk membangun
              kepercayaan diri, bukan tekanan.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="w-full md:w-auto min-w-[220px] md:min-w-[320px] py-4 px-8 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-transform"
              >
                Coba Tes Diagnostik Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem: We Understand Your Struggle */}
      <section className="w-full">
        <div className="container-ri text-center py-[64px] md:py-[120px]">
          <h2 className="text-[48px] leading-[1.3] font-bold text-foreground mb-8">
            Pernah Merasa Kewalahan Belajar TOEFL Sendiri?
          </h2>
          <div className="mx-auto max-w-[800px]">
            <p className="text-[18px] leading-[1.7] text-foreground max-w-[700px] mx-auto mb-12">
              Kami mengerti. Antara tumpukan buku, aplikasi yang membingungkan, dan tekanan untuk berhasil,
              mudah sekali merasa cemas dan kehilangan arah. Anda tidak sendirian dalam perjuangan ini.
            </p>
            {/* Subtle Padi wave separator */}
            <div className="mt-12 flex justify-center" aria-hidden>
              <svg width="160" height="12" viewBox="0 0 160 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6 C 20 0, 40 12, 60 6 S 100 0, 120 6 S 140 12, 160 6" stroke="currentColor" strokeWidth="2" className="text-padi" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solution: Your Sanctuary for Success */}
      <section className="w-full">
        <div className="container-ri py-[64px] md:py-[120px] space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Rumah Inggris: Pembelajaran Terstruktur, Kepercayaan Diri yang Hakiki.</h2>
          <p className="text-foreground/80 max-w-3xl">
          Melalui pendekatan yang teratur, dukungan mentor, dan komunitas yang peduli, kami membantu Anda
          membangun kejelasan langkah—dari diagnosis kebutuhan hingga pencapaian skor. Fokus kami adalah
          ketenangan dan kemajuan yang konsisten.
          </p>
        </div>
      </section>

      {/* 4. How It Works: Your Simple Path Forward */}
      <section className="w-full bg-[#F0F5F0]">
        <div className="container-ri py-[64px] md:py-[120px] space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Bagaimana Cara Kami Membantu Anda Mencapai Skor Impian?</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card padding="lg">
              <CardHeader className="mb-3">
                <CardTitle>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-padi/40 text-foreground">🔎</span>
                  <span className="ml-2 align-middle">Diagnose</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  Mulai dengan Tes Diagnostik Gratis kami untuk menemukan kekuatan dan peluang Anda.
                </p>
              </CardContent>
            </Card>
            <Card padding="lg">
              <CardHeader className="mb-3">
                <CardTitle>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-padi/40 text-foreground">📖</span>
                  <span className="ml-2 align-middle">Learn</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  Ikuti modul pembelajaran yang dipersonalisasi, fokus pada area yang paling Anda butuhkan.
                </p>
              </CardContent>
            </Card>
            <Card padding="lg">
              <CardHeader className="mb-3">
                <CardTitle>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-padi/40 text-foreground">🎓</span>
                  <span className="ml-2 align-middle">Achieve</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  Bangun kepercayaan diri, tingkatkan skor Anda, dan raih tujuan akademik atau karier Anda.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Our Unfair Advantage: More Than an App, a Home */}
      <section id="dorm" className="w-full overflow-visible">
        <div className="container-ri py-[64px] md:py-[120px] md:grid md:grid-cols-[3fr_2fr] md:gap-12 md:items-center overflow-visible">
          {/* Left: Collage ~60% width */}
          <div className="relative overflow-visible">
            {/* Mobile: stacked cleanly */}
            <div className="md:hidden space-y-4">
              <Image
                src="/dorm1.svg"
                alt="Ruang belajar dorm Rumah Inggris yang hangat dan nyaman"
                width={1000}
                height={640}
                className="w-full h-auto rounded-xl border border-teak/30 object-cover"
              />
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/dorm2.svg"
                  alt="Sudut baca yang nyaman di dorm Rumah Inggris"
                  width={500}
                  height={360}
                  className="w-full h-auto rounded-xl border border-teak/30 object-cover"
                />
                <Image
                  src="/dorm3.svg"
                  alt="Kebersamaan komunitas belajar di Rumah Inggris"
                  width={500}
                  height={360}
                  className="w-full h-auto rounded-xl border border-teak/30 object-cover"
                />
              </div>
            </div>

            {/* Desktop: overlapping collage */}
            <div className="hidden md:block relative w-full h-[520px] overflow-visible">
              {/* Main large image fills height; can extend left when wide */}
              <Reveal className="absolute -left-[100px] top-0 z-0 h-full w-[120%]" delayMs={0}>
                <div className="h-full rounded-xl border border-teak/30 overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.08)] rotate-[0.75deg]">
                  <Image
                    src="/dorm1.svg"
                    alt="Ruang belajar dorm Rumah Inggris yang hangat dan nyaman"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </Reveal>
              {/* Smaller image top-right (16:9) */}
              <Reveal className="absolute -right-2 top-[38%] z-10 w-[38%]" delayMs={120}>
                <div className="aspect-[16/9] rounded-xl border border-teak/30 overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.12)] -rotate-[1.25deg]">
                  <Image
                    src="/dorm2.svg"
                    alt="Sudut baca yang nyaman di dorm Rumah Inggris"
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
              {/* Smaller image bottom-right, slightly overlapped (16:9) */}
              <Reveal className="absolute -right-4 bottom-0 z-20 w-[56%]" delayMs={240}>
                <div className="aspect-[16/9] rounded-xl border border-teak/30 overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.14)] rotate-[1.25deg]">
                  <Image
                    src="/dorm3.svg"
                    alt="Kebersamaan komunitas belajar di Rumah Inggris"
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>

              {/* Tape accents (decorative) */}
              <div className="pointer-events-none absolute left-4 top-4 w-16 h-2 bg-teak/80 rotate-[12deg] rounded-sm" />
              <div className="pointer-events-none absolute right-8 top-40 w-14 h-2 bg-teak/70 -rotate-[10deg] rounded-sm" />
              <div className="pointer-events-none absolute right-16 bottom-10 w-12 h-2 bg-teak/70 rotate-[8deg] rounded-sm" />
            </div>
          </div>
          {/* Right: Story ~40% width */}
          <div className="mt-8 md:mt-0 text-center md:text-left relative z-30">
            <h2 className="text-[48px] leading-[1.3] font-bold text-foreground">Bukan Sekedar Aplikasi, Kami Adalah Rumah Inggris.</h2>
            <div className="w-[60px] h-[3px] bg-teak my-8 mx-auto md:mx-0" />
            <p className="text-[18px] leading-[1.7] text-foreground mb-8">
              Dapatkan dukungan yang Anda butuhkan, online dan offline, di lingkungan yang benar-benar peduli. Di Rumah Inggris, kami percaya pembelajaran terbaik terjadi saat teknologi canggih bertemu dengan koneksi manusia yang tulus.
            </p>
            <Button
              variant="secondary"
              className="bg-transparent text-teak border-2 border-teak px-7 py-[14px] rounded-lg hover:bg-teak hover:text-background"
            >
              Jelajahi Asrama Kami
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Testimonials: Hear From Those Who Found Their Calm */}
      <section className="w-full bg-[#F0F5F0]">
        <div className="container-ri py-[64px] md:py-[120px]">
          <h2 className="text-[48px] leading-[1.3] font-bold text-foreground text-center mb-16">Kisah Sukses dari Komunitas Kami.</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-background p-8 rounded-2xl shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
                <div className="text-padi text-[48px] leading-none">“</div>
                <p className="mt-4 italic text-[18px] leading-[1.7] text-foreground">
                  Rumah Inggris tidak hanya meningkatkan skor saya, tetapi juga menghilangkan kecemasan saya. Saya merasa siap dan percaya diri.
                </p>
                <div className="mt-6">
                  <div className="text-[16px] font-semibold text-foreground">Aisha R.</div>
                  <div className="text-[14px] text-teak">Accepted to University of Melbourne</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA: Your Journey Starts Here */}
      <section className="w-full bg-foreground">
        <div className="container-ri py-[64px] md:py-[120px] text-center">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-[48px] leading-[1.3] font-bold text-background mb-8">Siap Memulai Perjalanan Anda?</h2>
            <p className="text-[18px] leading-[1.7] text-background/90 mb-12">
              Dapatkan analisis pribadi Anda dan langkah pertama yang jelas hari ini. Tidak ada risiko, hanya peluang.
            </p>
            <Button size="lg" className="min-w-[260px]">Coba Tes Diagnostik Gratis</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
