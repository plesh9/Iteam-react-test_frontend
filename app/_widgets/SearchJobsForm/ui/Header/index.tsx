import type { FC } from 'react'
import { Box, Title } from 'vibe-library'
import Input from '@shared/ui/Input'

interface Props {
    title?: string
    query: string
    setQuery: (query: string) => void
}

const Header: FC<Props> = ({ title, query, setQuery }) => {
    return (
        <Box ui={{ gap: 1 }}>
            <Title>{title}</Title>
            <Input placeholder='Search Jobs...' value={query} onChange={(e) => setQuery(e.target.value)} />
        </Box>
    )
}

export default Header
