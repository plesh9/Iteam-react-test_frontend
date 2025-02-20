import Link from 'next/link'
import { type FC } from 'react'
import { Button, NoData } from 'vibe-library'
import ROUTES from '@shared/const/routes'
import useLikedStore from '@shared/state/useLikedStore'
import JobsContainer from '@shared/ui/JobsContainer'
import JobCard from '@features/JobCard'

const LickedJobs: FC = () => {
    const likedJobs = useLikedStore((state) => state.likedJobs)

    if (!likedJobs.length) {
        return (
            <NoData title='No liked jobs' subtitle='You have not liked any jobs yet'>
                <Button as={Link} href={ROUTES.PUBLIC.searchJobs} size='small'>
                    Go to search jobs
                </Button>
            </NoData>
        )
    }

    return (
        <JobsContainer>
            {likedJobs.map((job) => (
                <JobCard job={job} key={job.job_id} />
            ))}
        </JobsContainer>
    )
}

export default LickedJobs
