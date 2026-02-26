import type { Metadata } from 'next';
import { Sora, Space_Grotesk } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import PageTransition from '@/components/PageTransition';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mahithesh-portfolio.vercel.app'),
  title: {
    default: 'Mahithesh | Full Stack Developer & AI Enthusiast',
    template: '%s | Mahithesh Portfolio'
  },
  description:
    'Portfolio of Mahithesh, a BTech CSE (AI & ML) student building scalable full stack applications and practical AI systems.',
  keywords: [
    'Mahithesh',
    'Full Stack Developer',
    'AI Engineer',
    'Next.js Portfolio',
    'Machine Learning Projects',
    'India Developer'
  ],
  openGraph: {
    title: 'Mahithesh | Full Stack Developer | AI & ML Enthusiast',
    description:
      'Modern interactive portfolio featuring full stack and AI projects by Mahithesh.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://mahithesh-portfolio.vercel.app',
    siteName: 'Mahithesh Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahithesh Portfolio',
    description: 'Full Stack Developer | AI & ML Enthusiast'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${spaceGrotesk.variable}`}>
      <body>
        <CustomCursor />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
