'use client'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, type FC } from 'react'
import { Box, Button, Loader, NoData, Text, Title } from 'vibe-library'
import ROUTES from '@shared/const/routes'
import LikeJobButton from '@features/LikeJobButton'
import PageLayout from '@widgets/PageLayout'
import useJobDetailsStore from './_state/useJobDetailsStore'

const Page: FC = () => {
    const jobId = useParams().id as string
    const job = useJobDetailsStore((state) => state.job)
    const isLoading = useJobDetailsStore((state) => state.isLoading)
    const fetchJob = useJobDetailsStore((state) => state.fetchJob)
    const router = useRouter()

    useEffect(() => {
        fetchJob({ body: { job_id: decodeURIComponent(jobId) } })

        return () => {
            useJobDetailsStore.setState({ job: null, isLoading: true })
        }
    }, [jobId, fetchJob])

    if (isLoading) {
        return <Loader />
    }

    if (!job) {
        return (
            <NoData title='Job not found' subtitle='The job you are looking for does not exist or has been removed.'>
                <Button as={Link} href={ROUTES.PUBLIC.searchJobs} size='small'>
                    Back to search
                </Button>
            </NoData>
        )
    }

    return (
        <PageLayout>
            <Box ui={{ gap: 6, grow: true }}>
                <Box ui={{ gap: 1 }}>
                    <Title>{job.job_title}</Title>
                    <Text>Company: {job.employer_name}</Text>
                    {job.employer_website && (
                        <Text>
                            Website:{' '}
                            <Text as='a' color='blue500' href={job.employer_website} target='_blank' rel='noopener noreferrer'>
                                {job.employer_website}
                            </Text>
                        </Text>
                    )}
                    <Text>
                        Location: {job.job_city}, {job.job_state}, {job.job_country}
                    </Text>
                    <Text>Employment Type: {job.job_employment_type}</Text>
                    <Text>Salary: {job.job_min_salary ? `$${job.job_min_salary} - $${job.job_max_salary}` : 'Not specified'}</Text>
                    <Text>Salary Period: {job.job_salary_period ?? 'Not specified'}</Text>
                    <Text>Remote: {job.job_is_remote ? 'Yes' : 'No'}</Text>
                </Box>
                <Box ui={{ gap: 1 }}>
                    <Title variant='h2'>Job Description</Title>
                    <Text>{job.job_description}</Text>
                </Box>
                {!!job.job_highlights?.lenght && (
                    <Box ui={{ gap: 1 }}>
                        <Title variant='h2'>Job Highlights</Title>
                        <ul>
                            {Object.entries(job.job_highlights).map(([key, value]) => (
                                <li key={key}>
                                    <strong>{key.replace(/_/g, ' ')}:</strong> {value.join(', ')}
                                </li>
                            ))}
                        </ul>
                    </Box>
                )}
                {!!job.apply_options?.length && (
                    <Box ui={{ gap: 1 }}>
                        <Title variant='h2'>How to Apply</Title>
                        {job.apply_options.map((option, index) => (
                            <div key={index} className='mb-4'>
                                <Text>Publisher: {option.publisher}</Text>
                                <Text as='a' color='blue500' href={option.apply_link} target='_blank' rel='noopener noreferrer'>
                                    Apply Here
                                </Text>
                                <Text>Direct Apply: {option.is_direct ? 'Yes' : 'No'}</Text>
                            </div>
                        ))}
                    </Box>
                )}
            </Box>
            <Box ui={{ flexDirection: 'row', justify: 'end', align: 'center', gap: 4 }}>
                <Button onClick={router.back} variant='link' icon='arrow-back' size='small'>
                    Back
                </Button>
                <LikeJobButton job={job} />
            </Box>
        </PageLayout>
    )
}

export default Page
