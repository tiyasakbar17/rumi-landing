import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export type ComingSoonProps = {
  title?: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function ComingSoon({
  title = 'Segera Hadir',
  description = 'Fitur ini sedang kami siapkan agar pengalaman belajar Anda semakin nyaman dan efektif.',
  ctaHref = '/',
  ctaLabel = 'Kembali ke Beranda',
}: ComingSoonProps) {
  return (
    <section className="w-full bg-background">
      <div className="container-ri text-center py-[64px] md:py-[120px]">
        <div className="max-w-[960px] mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative w-[490px] h-[350px] md:w-[823px] md:h-[540px]">
              <Image
                src="/coming-soon.png"
                alt="Ilustrasi fitur segera hadir"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <h1 className="text-[32px] md:text-[48px] leading-[1.2] font-bold text-foreground mb-4">{title}</h1>
          <p className="text-[16px] md:text-[18px] leading-[1.7] text-foreground/90 mb-8">
            {description}
          </p>
          <div className="flex justify-center">
            <Link href={ctaHref} className="inline-block">
              <Button size="lg" className="min-w-[220px]">{ctaLabel}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
