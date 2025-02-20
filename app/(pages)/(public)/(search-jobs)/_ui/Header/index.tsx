import type { FC } from 'react'
import { Box, Title } from 'vibe-library'
import Input from '@shared/ui/Input'
import useSearchJobsStore from '../../_state/useSearchJobsStore'

const Header: FC = () => {
    const query = useSearchJobsStore((state) => state.query)

    return (
        <Box ui={{ gap: 1 }}>
            <Title variant='h1'>Search Jobs</Title>
            <Input placeholder='Search Jobs...' value={query} onChange={(e) => useSearchJobsStore.setState({ query: e.target.value })} />
        </Box>
    )
}

export default Header
