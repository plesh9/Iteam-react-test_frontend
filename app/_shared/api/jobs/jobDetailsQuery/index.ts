import rapidAxiosInstance from '@shared/config/axios/rapidInstance'
import createCache from '@shared/lib/createCache'
import type { JobType } from '@shared/types/jobs'
import type { BaseRapidResponseType } from '@shared/types/rapid'

export type JobDetailsResponseType = BaseRapidResponseType<Array<JobType>>
export interface JobDetailsOptionsType {
    body: {
        job_id: string
    }
}

const jobDetailsQueryFn = async ({ body }: JobDetailsOptionsType) => {
    return rapidAxiosInstance
        .get<JobDetailsResponseType>('/job-details', {
            params: body
        })
        .then((response) => response.data)
}

export const [jobDetailsQuery] = createCache(jobDetailsQueryFn)
