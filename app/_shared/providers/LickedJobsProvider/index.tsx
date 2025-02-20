'use client'
import type { PropsWithChildren } from 'react'
import { useEffect, useState, type FC } from 'react'
import useLikedStore, { LOCAL_STORAGE_LIKED_JOBS_KEY } from '@shared/state/useLikedStore'
import PageLoader from '@widgets/PageLoader'

const LickedJobsProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const setLikedJobs = useLikedStore((state) => state.setLikedJobs)

    useEffect(() => {
        const likedJobs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIKED_JOBS_KEY) || '[]')
        const isLikedJobsValid = Array.isArray(likedJobs) && likedJobs.every((job) => typeof job === 'object')

        setLikedJobs(isLikedJobsValid ? likedJobs : [])
        setIsLoading(false)
    }, [setLikedJobs])

    if (isLoading) {
        return <PageLoader />
    }

    return children
}

export default LickedJobsProvider
