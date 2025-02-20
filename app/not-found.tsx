'use client'
import Link from 'next/link'
import type { FC } from 'react'
import { Button, NoData } from 'vibe-library'
import ROUTES from '@shared/const/routes'

export const index: FC = () => {
    return (
        <NoData title='404' subtitle='Page not found'>
            <Button as={Link} href={ROUTES.PUBLIC.searchJobs} size='small'>
                Go to Home
            </Button>
        </NoData>
    )
}

export default index
