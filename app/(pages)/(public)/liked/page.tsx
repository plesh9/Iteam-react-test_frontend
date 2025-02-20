'use client'
import type { FC } from 'react'
import { Title } from 'vibe-library'
import LineHorizontal from '@shared/ui/LineHorizontal'
import PageLayout from '@widgets/PageLayout'
import LickedJobs from './_ui/LickedJobs'

const page: FC = () => {
    return (
        <PageLayout>
            <Title>Liked Jobs</Title>
            <LineHorizontal />
            <LickedJobs />
        </PageLayout>
    )
}

export default page
