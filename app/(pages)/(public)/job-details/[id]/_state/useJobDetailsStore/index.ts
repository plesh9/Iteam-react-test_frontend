import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { JobDetailsOptionsType } from '@shared/api/jobs/jobDetailsQuery'
import { jobDetailsQuery } from '@shared/api/jobs/jobDetailsQuery'
import errorHandler from '@shared/lib/errorHandler'
import type { JobType } from '@shared/types/jobs'

interface UseSearchStoreType {
    job: JobType | null
    isLoading: boolean
    fetchJob: (options: JobDetailsOptionsType) => void
}

const useJobDetailsStore = create<UseSearchStoreType>()(
    devtools(
        (set) => ({
            job: null,
            isLoading: true,
            fetchJob: async ({ body }) => {
                jobDetailsQuery({ body }, { onBeforeFetch: () => set({ isLoading: true }) })
                    .then((response) => set(() => ({ job: response.data[0] })))
                    .catch(errorHandler)
                    .finally(() => set({ isLoading: false }))
            }
        }),
        { name: 'useJobDetailsStore' }
    )
)

export default useJobDetailsStore
