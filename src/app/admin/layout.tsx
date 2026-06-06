import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Admin · Kona Coffee Donut',
  // Never let the admin area be indexed.
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
