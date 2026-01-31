import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Dreckshop',
  description: 'Sir/Maam আমাদের DreckShop থেকে জানানো যাচ্ছে যে, যারা আমাদের পুরোনো কাস্টমার, তাদের জন্য থাকছে একটি  এক্সক্লুসিভ ইভেন্টে অ্যাক্সেস এই ইভেন্টে রয়েছে অনেকগুলো এক্সাইটিং রিওয়ার্ড, যা সম্পূর্ণভাবে আপনার ভাগ্যের উপর নির্ভর করবে!',
  generator: 'Dreckshop',
  icons: {
    icon: [
      {
        url: 'https://dreckshop.com/wp-content/uploads/2025/12/Untitled-Design-1.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'https://dreckshop.com/wp-content/uploads/2025/12/Untitled-Design-1.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'https://dreckshop.com/wp-content/uploads/2026/01/cropped-cropped-Untitled-design-5P-192x192.png',
        type: 'image/svg+xml',
      },
    ],
    apple: 'https://dreckshop.com/wp-content/uploads/2026/01/cropped-cropped-Untitled-design-5P-192x192.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
