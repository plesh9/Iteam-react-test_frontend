import Link from 'next/link'
import type { FC } from 'react'
import { Box, Button, Text, Title } from 'vibe-library'
import ROUTES from '@shared/const/routes'
import useLikedStore from '@shared/state/useLikedStore'
import type { JobType } from '@shared/types/jobs'
import ClampWrapper from '@shared/ui/ClampWrapper'
import s from './JobCard.module.scss'

interface Props {
    job: JobType
}

const JobCard: FC<Props> = ({ job }) => {
    const isLiked = useLikedStore((state) => state.likedJobs.some((likedJob) => likedJob.job_id === job.job_id))
    const addLikedJob = useLikedStore((state) => state.addLikedJob)
    const removeLikedJo = useLikedStore((state) => state.removeLikedJob)
    const { job_title, job_description, job_min_salary, job_max_salary, job_salary_period, job_country, job_city, job_id } = job

    return (
        <Box as={Link} href={ROUTES.PUBLIC.jobDetails(job_id)} className={s.main} ui={{ gap: 6, p: 4 }}>
            <Box ui={{ gap: 1, grow: true }}>
                <Box>
                    <ClampWrapper className='grow-true'>
                        <Title variant='h2'>{job_title}</Title>
                    </ClampWrapper>
                    {job_min_salary && job_max_salary && job_salary_period && (
                        <Title variant='h2' color='green500' lineHeight='140' noWrap>
                            ${job_min_salary} - ${job_max_salary} / {job_salary_period.toLowerCase()}
                        </Title>
                    )}
                    <Title variant='h5'>
                        {job_country} - {job_city}
                    </Title>
                </Box>
                <ClampWrapper clamp={3}>
                    <Text>{job_description}</Text>
                </ClampWrapper>
            </Box>

            <Box ui={{ align: 'end' }}>
                {isLiked ? (
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
                ) : (
                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                            addLikedJob(job)
                        }}
                        size='small'
                    >
                        Save Job
                    </Button>
                )}
            </Box>
        </Box>
    )
}

export default JobCard
