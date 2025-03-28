import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Instrument_Serif } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  // Include various weights for flexibility
  weight: ['200', '300', '400', '500'],
  variable: '--font-plus-jakarta'
})

const instrumentSerif = Instrument_Serif({ 
  weight: ['400'],
  style: ['italic'],
  subsets: ['latin'],
  variable: '--font-instrument'
})

export const metadata: Metadata = {
  title: 'Join Maria Team',
  description: 'Join our elite team of insurance professionals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${instrumentSerif.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}