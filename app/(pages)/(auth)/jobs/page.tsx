'use client'
import type { FC } from 'react'
import useAuthStore from '@shared/state/useAuthStore'
import PageLayout from '@widgets/PageLayout'
import SearchJobsForm from '@widgets/SearchJobsForm'

const page: FC = () => {
    const userData = useAuthStore((state) => state.userData!)

    return (
        <PageLayout>
            <SearchJobsForm initialQuery={userData.desiredJobTitle} />
        </PageLayout>
    )
}

export default page
