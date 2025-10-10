import { ComingSoon } from '@/components/common/ComingSoon';

export const dynamic = 'force-static';
export const metadata = {
  title: 'Diagnostic | Rumah Inggris',
  description: 'Mulai dari sini untuk memetakan kebutuhan belajar Anda.',
};

export default function DiagnosticPage() {
  return (
    <div>
      <ComingSoon
        title="Tes Diagnostik — Segera Hadir"
        description="Kami sedang menyiapkan pengalaman tes diagnostik yang intuitif untuk memetakan kekuatan dan area fokus Anda."
        ctaHref="/"
        ctaLabel="Kembali ke Beranda"
      />
    </div>
  );
}
