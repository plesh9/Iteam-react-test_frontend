import { useLayoutEffect, useState, type FC } from 'react'
import { Loader, NoData } from 'vibe-library'
import { searchJobsQuery } from '@shared/api/jobs/searchJobsQuery'
import errorHandler from '@shared/lib/errorHandler'
import type { JobType } from '@shared/types/jobs'
import JobsContainer from '@shared/ui/JobsContainer'
import JobCard from '@features/JobCard'

interface Props {
    initialQuery?: string
    query: string
}

const MINIMUM_SEARCH_QUERY_LENGTH = 2

const Jobs: FC<Props> = ({ initialQuery, query }) => {
    const [jobs, setJobs] = useState<Array<JobType>>([])
    const [isLoading, setIsLoading] = useState(Boolean(initialQuery))

    useLayoutEffect(() => {
        if (query.length <= MINIMUM_SEARCH_QUERY_LENGTH) {
            setJobs([])
            setIsLoading(false)

            return
        }

        const abortController = new AbortController()

        searchJobsQuery(
            { body: { query }, signal: abortController.signal },
            {
                onBeforeFetch: () => setIsLoading(true)
            }
        )
            .then((response) => setJobs(response.data))
            .catch(errorHandler)
            .finally(() => {
                if (abortController.signal.aborted) {
                    return
                }

                setIsLoading(false)
            })

        return () => {
            abortController.abort()
        }
    }, [query])

    if (isLoading) {
        return <Loader />
    }

    if (!jobs.length) {
        return <NoData title='No Jobs Found' subtitle="We couldn't find any jobs matching your search criteria." />
    }

    return (
        <JobsContainer>
            {jobs.map((job) => (
                <JobCard job={job} key={job.job_id} />
            ))}
        </JobsContainer>
    )
}

export default Jobs
