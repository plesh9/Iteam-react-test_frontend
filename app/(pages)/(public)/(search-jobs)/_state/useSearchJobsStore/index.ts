import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { SearchJobsQueryOptionsType } from '@shared/api/jobs/searchJobsQuery'
import { searchJobsQuery } from '@shared/api/jobs/searchJobsQuery'
import errorHandler from '@shared/lib/errorHandler'
import type { JobType } from '@shared/types/jobs'

interface UseSearchStoreType {
    query: string
    setQuery: (query: string) => void
    jobs: Array<JobType>
    isLoading: boolean
    searchJobs: (options: SearchJobsQueryOptionsType) => void
}

export const MINIMUM_SEARCH_QUERY_LENGTH = 2

const useSearchJobsStore = create<UseSearchStoreType>()(
    devtools(
        (set) => ({
            query: '',
            setQuery: (query) => set({ query }),
            jobs: [],
            isLoading: false,
            searchJobs: (options) => {
                searchJobsQuery(options, {
                    onBeforeFetch: () => set({ isLoading: true })
                })
                    .then((response) => set({ jobs: response.data }))
                    .catch(errorHandler)
                    .finally(() => {
                        if (options.signal.aborted) {
                            return
                        }

                        set({ isLoading: false })
                    })
            }
        }),
        { name: 'useSearchJobsStore' }
    )
)

export default useSearchJobsStore
