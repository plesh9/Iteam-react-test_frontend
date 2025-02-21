'use client'
import type { FC } from 'react'
import { Title } from 'vibe-library'
import PageLayout from '@widgets/PageLayout'
import LickedJobs from './_ui/LickedJobs'

const page: FC = () => {
    return (
        <PageLayout>
            <Title>Liked Jobs</Title>
            <LickedJobs />
        </PageLayout>
    )
}

export default page
