import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import type { FC, PropsWithChildren } from 'react'
import { AlertProvider } from '@shared/providers'
import LickedJobsProvider from '@shared/providers/LickedJobsProvider'
import UserProvider from '@shared/providers/UserProvider'
import HeaderLayout from '@widgets/HeaderLayout'
import 'vibe-library/dist/assets/main.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: 'Jobs',
    description: 'Find your dream job'
}

const layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang='en'>
            <body className={geistSans.variable}>
                <LickedJobsProvider>
                    <UserProvider>
                        <HeaderLayout>{children}</HeaderLayout>
                    </UserProvider>
                </LickedJobsProvider>
                <AlertProvider />
            </body>
        </html>
    )
}

export default layout
