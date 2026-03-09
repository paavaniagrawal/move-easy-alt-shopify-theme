import type { Metadata } from 'next'
import { DM_Sans, Lora } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '700'],
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Move Easy | Advanced Joint Support | Lightyears Health',
  description:
    'Clinically proven joint support supplement with Aflapin® Boswellia. Triple action mechanism targeting inflammation, bone strength, and muscle recovery.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
