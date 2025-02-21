'use client'
import type { PropsWithChildren } from 'react'
import { useLayoutEffect, type FC } from 'react'
import useLikedStore, { LOCAL_STORAGE_LIKED_JOBS_KEY } from '@shared/state/useLikedStore'

const LickedJobsProvider: FC<PropsWithChildren> = ({ children }) => {
    const setLikedJobs = useLikedStore((state) => state.setLikedJobs)

    useLayoutEffect(() => {
        const likedJobs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIKED_JOBS_KEY) || '[]')
        const isLikedJobsValid = Array.isArray(likedJobs) && likedJobs.every((job) => typeof job === 'object')

        setLikedJobs(isLikedJobsValid ? likedJobs : [])
    }, [setLikedJobs])

    return children
}

export default LickedJobsProvider
