
import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Shikharji Darshan - Your Spiritual Guide to Jain Pilgrimage',
    template: '%s | Shikharji Darshan',
  },
  description: 'Your spiritual travel companion for Jain Dharma. Plan your Shikharji Yatra, explore Tirthankara teachings, and discover global Jain Tirths.',
  keywords: ['Shikharji', 'Jainism', 'Tirthankara', 'Parasnath', 'Madhuban', 'Jain Dharma', 'Pilgrimage', 'Yatra', 'Jain Temple'],
  openGraph: {
    title: 'Shikharji Darshan',
    description: 'A spiritual travel companion for Jain Dharma seekers.',
    type: 'website',
    locale: 'en_US',
    url: 'https://shikharji-darshan.com', // Replace with your actual domain
    images: [
      {
        url: 'https://shikharji-darshan.com/og/default-og-image.jpg', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Shikharji Darshan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shikharji Darshan',
    description: 'Your spiritual guide to Jain pilgrimage.',
    // images: ['https://shikharji-darshan.com/og/twitter-image.jpg'], // Replace with your Twitter-specific image
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Belleza&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
