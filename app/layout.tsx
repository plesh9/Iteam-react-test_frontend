import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import 'vibe-library/dist/assets/main.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: 'Jobs',
    description: 'Find your dream job'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={geistSans.variable}>{children}</body>
        </html>
    )
}
