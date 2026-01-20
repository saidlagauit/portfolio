import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata = {
  metadataBase: new URL('https://portfolio.vercel.app'),
  title: {
    default: 'Your Name | Senior Full Stack Developer',
    template: '%s | Your Name'
  },
  description: 'Senior Full Stack Developer based in Morocco. Building exceptional digital experiences with modern technologies.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Web Development', 'Morocco', 'Portfolio'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.vercel.app',
    title: 'Your Name | Senior Full Stack Developer',
    description: 'Senior Full Stack Developer based in Morocco. Building exceptional digital experiences with modern technologies.',
    siteName: 'Your Name Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name | Senior Full Stack Developer',
    description: 'Senior Full Stack Developer based in Morocco. Building exceptional digital experiences with modern technologies.',
    creator: '@yourname',
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
