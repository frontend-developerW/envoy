import { Inter } from 'next/font/google'
import './globals.css'
import StoreProvider from './app/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Primesox',
  description: 'Primesox.io',
}

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  )
}
