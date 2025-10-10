import { ComingSoon } from '@/components/common/ComingSoon';

export const dynamic = 'force-static';
export const metadata = {
  title: 'Register | Rumah Inggris',
  description: 'Buat akun baru untuk memulai perjalanan TOEFL Anda.',
};

export default function RegisterPage() {
  return (
    <div>
      <ComingSoon
        title="Register — Segera Hadir"
        description="Kami sedang menyiapkan proses pendaftaran yang cepat dan sederhana agar Anda bisa langsung mulai belajar."
        ctaHref="/"
        ctaLabel="Kembali ke Beranda"
      />
    </div>
  );
}
