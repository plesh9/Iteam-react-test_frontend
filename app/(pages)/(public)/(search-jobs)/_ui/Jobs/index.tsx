import { useEffect, type FC } from 'react'
import { Loader, NoData } from 'vibe-library'
import JobsContainer from '@shared/ui/JobsContainer'
import JobCard from '@features/JobCard'
import useSearchJobsStore, { MINIMUM_SEARCH_QUERY_LENGTH } from '../../_state/useSearchJobsStore'

const Jobs: FC = () => {
    const query = useSearchJobsStore((state) => state.query)
    const jobs = useSearchJobsStore((state) => state.jobs)
    const searchJobs = useSearchJobsStore((state) => state.searchJobs)
    const isLoading = useSearchJobsStore((state) => state.isLoading)

    useEffect(() => {
        if (query.length <= MINIMUM_SEARCH_QUERY_LENGTH) {
            useSearchJobsStore.setState({ jobs: [], isLoading: false })

            return
        }

        const abortController = new AbortController()

        searchJobs({ body: { query }, signal: abortController.signal })

        return () => {
            abortController.abort()
        }
    }, [query, searchJobs])

    if (isLoading) {
        return <Loader />
    }

    if (!jobs.length) {
        return <NoData title='No Jobs Found' subtitle='Try searching for something else' />
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
