import { ComingSoon } from '@/components/common/ComingSoon';

export const dynamic = 'force-static';
export const metadata = {
  title: 'Login | Rumah Inggris',
  description: 'Masuk ke akun Rumah Inggris Anda.',
};

export default function LoginPage() {
  return (
    <div>
      <ComingSoon
        title="Login — Segera Hadir"
        description="Kami sedang menyiapkan pengalaman login yang aman dan mudah digunakan."
        ctaHref="/"
        ctaLabel="Kembali ke Beranda"
      />
    </div>
  );
}
