import rapidAxiosInstance from '@shared/config/axios/rapidInstance'
import createCache from '@shared/lib/createCache'
import type { JobType } from '@shared/types/jobs'
import type { BaseRapidResponseType } from '@shared/types/rapid'

export type SearchJobsResponseType = BaseRapidResponseType<Array<JobType>>
export interface SearchJobsQueryOptionsType {
    body: {
        query: string
    }
    signal: AbortSignal
}

const searchJobsQueryFn = async ({ body, signal }: SearchJobsQueryOptionsType) => {
    return rapidAxiosInstance
        .get<SearchJobsResponseType>('/search', {
            params: body,
            signal
        })
        .then((response) => response.data)
}

export const [searchJobsQuery] = createCache(searchJobsQueryFn)
