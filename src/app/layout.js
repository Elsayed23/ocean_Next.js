import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ocean.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <link rel='icon' href='/logo.png' />
      <body className={`${inter.className} text-[#94A3B8] bg-[#0F172A]`}>{children}</body>
    </html>
  )
}