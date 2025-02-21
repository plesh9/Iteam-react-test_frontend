import type { FC } from 'react'
import { Button } from 'vibe-library'
import useLikedStore from '@shared/state/useLikedStore'
import type { JobType } from '@shared/types/jobs'

interface Props {
    job: JobType
}

const LikeJobButton: FC<Props> = ({ job }) => {
    const isLiked = useLikedStore((state) => state.likedJobs.some((likedJob) => likedJob.job_id === job.job_id))
    const addLikedJob = useLikedStore((state) => state.addLikedJob)
    const removeLikedJo = useLikedStore((state) => state.removeLikedJob)

    if (isLiked) {
        return (
            <Button
                onClick={(e) => {
                    e.preventDefault()
                    removeLikedJo(job)
                }}
                variant='secondary'
                size='small'
            >
                Unsave Job
            </Button>
        )
    }

    return (
        <Button
            onClick={(e) => {
                e.preventDefault()
                addLikedJob(job)
            }}
            size='small'
        >
            Save Job
        </Button>
    )
}

export default LikeJobButton
