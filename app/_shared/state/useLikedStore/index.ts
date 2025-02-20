import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { JobType } from '@shared/types/jobs'
import { Alert } from '../useAlertStore'

interface UseLikedStoreType {
    likedJobs: Array<JobType>
    setLikedJobs: (likedJobs: Array<JobType>) => void
    addLikedJob: (likedJobs: JobType) => void
    removeLikedJob: (likedJobs: JobType) => void
}

export const LOCAL_STORAGE_LIKED_JOBS_KEY = 'likedJobs'

const useLikedStore = create<UseLikedStoreType>()(
    devtools(
        (set) => ({
            likedJobs: [],
            setLikedJobs: (likedJobs) => set({ likedJobs }),
            addLikedJob: (job) => {
                const likedJobs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIKED_JOBS_KEY) || '[]') as Array<JobType>
                const newLikedJobs = [...likedJobs, job]

                localStorage.setItem(LOCAL_STORAGE_LIKED_JOBS_KEY, JSON.stringify(newLikedJobs))
                set({ likedJobs: newLikedJobs })
                Alert('success', 'Job added to liked jobs')
            },
            removeLikedJob: (job) => {
                const likedJobs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIKED_JOBS_KEY) || '[]') as Array<JobType>
                const newLikedJobs = likedJobs.filter((likedJob) => likedJob.job_id !== job.job_id)

                localStorage.setItem(LOCAL_STORAGE_LIKED_JOBS_KEY, JSON.stringify(newLikedJobs))
                set({ likedJobs: newLikedJobs })
                Alert('success', 'Job removed from liked jobs')
            }
        }),
        { name: 'useLikedStore' }
    )
)

export default useLikedStore
