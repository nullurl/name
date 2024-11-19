import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://namecraft.site'),
  title: 'NameCraft AI: Free Chinese, English, and Japanese Name Generator for Everyone',
  description: 'Generate perfect names in English, Japanese, and Chinese with our AI-powered name generator. Create unique, culturally appropriate names with handwriting and pronunciation features.',
  keywords: 'name generator, Japanese names, Chinese names, English names, AI name generator, character names, handwriting names, name pronunciation, multilingual names',
  authors: [{ name: 'NameCraft AI' }],
  openGraph: {
    title: 'NameCraft AI: Free Chinese, English, and Japanese Name Generator for Everyone',
    description: 'Generate perfect names in English, Japanese, and Chinese with our AI-powered name generator.',
    url: 'https://namecraft.site',
    siteName: 'NameCraft AI',
    images: [
      {
        url: 'https://namecraft.site/social-preview.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NameCraft AI: Free Chinese, English, and Japanese Name Generator for Everyone',
    description: 'Generate perfect names in English, Japanese, and Chinese with our AI-powered name generator.',
    images: ['https://namecraft.site/social-preview.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Noto+Serif+JP&family=Ma+Yen+Xing&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}