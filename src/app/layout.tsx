import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Rigraphed',
  description: 'Personal portfolio showcasing my perspective of the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-black dark:text-white font-bold dark:font-normal'>{children}</body>
    </html>
  )
}
