'use client'
import type { FC } from 'react'
import PageLayout from '@widgets/PageLayout'
import Header from './_ui/Header'
import Jobs from './_ui/Jobs'

const page: FC = () => {
    return (
        <PageLayout>
            <Header />
            <Jobs />
        </PageLayout>
    )
}

export default page
