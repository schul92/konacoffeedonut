import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from '@/components/admin/ThemeProvider';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Admin · Kona Coffee Donut',
  // Never let the admin area be indexed.
  robots: { index: false, follow: false, nocache: true },
};

// Set the theme class before paint to avoid a flash (default = light).
const noFlash = `try{if(localStorage.getItem('ad-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`;

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`admin-theme ${GeistSans.className}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
