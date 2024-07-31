import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Unbounded } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: 'SiteShowcase',
    template: '%s | SiteShowcase'
  },
  description: 'Create and manage preview links for your websites with ease. SiteShowcase lets you hide the original template source while showcasing your work to clients.',
  applicationName: 'SiteShowcase',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'preview links',
    'website showcase',
    'hide template source',
    'client preview',
    'SiteShowcase'
  ],
  authors: [{ name: 'Arshahdul Ahmed', url: 'https://your-portfolio-url.com' }],
  publisher: 'SiteShowcase',
  metadataBase: new URL('https://siteshowcase.in'),
  openGraph: {
    title: 'SiteShowcase',
    description: 'Create and manage preview links for your websites with ease. SiteShowcase lets you hide the original template source while showcasing your work to clients.',
    url: 'https://siteshowcase.in',
    siteName: 'SiteShowcase',
    images: [
      {
        url: 'https://siteshowcase.in/og-image.png',
        width: 500,
        height: 500,
        alt: 'SiteShowcase Logo'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: 'https://siteshowcase.in/favicon.ico',
    shortcut: 'https://siteshowcase.in/shortcut-icon.png',
    apple: 'https://siteshowcase.in/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: 'https://siteshowcase.in/apple-touch-icon-precomposed.png',
    },
  },
  manifest: 'https://siteshowcase.in/manifest.json',
  twitter: {
    card: 'summary_large_image',
    title: 'SiteShowcase',
    description: 'Create and manage preview links for your websites with ease. SiteShowcase lets you hide the original template source while showcasing your work to clients.',
    creator: '@ArshahdulAhmed',
    images: ['https://siteshowcase.in/twitter-image.png'],
  },
  verification: {
    google: 'google-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
    other: {
      me: ['https://github.com/ArshahdulAhmed', 'https://twitter.com/ArshahdulAhmed'],
    },
  },
  category: 'Web Development',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
