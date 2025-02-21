'use client'
import { useState, type FC } from 'react'
import { Box } from 'vibe-library'
import Header from './ui/Header'
import Jobs from './ui/Jobs'

interface Props {
    title?: string
    initialQuery?: string
}

const SearchJobsForm: FC<Props> = ({ title = 'Jobs', initialQuery }) => {
    const [query, setQuery] = useState(initialQuery ?? '')

    return (
        <Box ui={{ gap: 6, grow: true }}>
            <Header title={title} query={query} setQuery={setQuery} />
            <Jobs initialQuery={initialQuery} query={query} />
        </Box>
    )
}

export default SearchJobsForm
