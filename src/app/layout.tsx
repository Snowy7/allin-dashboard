import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Happy Sweet Cake',
    default: 'Happy Sweet Cake - Premium Sweets & Events in Qatar',
  },
  description: "A Qatari platform connecting clients with couture dessert studios, floral artists, and premium event planners.",
  keywords: ["Qatar sweets", "Doha events", "luxury cakes Qatar", "flower delivery Doha", "event planning Qatar", "Happy Sweet Cake"],
  authors: [{ name: "Happy Sweet Cake" }],
  creator: "Happy Sweet Cake",
  publisher: "Happy Sweet Cake",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Happy Sweet Cake',
    description: 'Curated sweets, fine florals, and bespoke celebrations across Qatar.',
    url: 'https://www.happycakesweet.com',
    siteName: 'Happy Sweet Cake',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy Sweet Cake',
    description: 'Curated sweets, fine florals, and bespoke celebrations across Qatar.',
    creator: '@happysweetcake',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
