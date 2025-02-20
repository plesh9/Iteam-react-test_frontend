import type { FC, ReactNode } from 'react'
import { Box } from 'vibe-library'

interface Props {
    children: ReactNode
}

const JobsContainer: FC<Props> = ({ children }) => {
    return <Box ui={{ gap: 4, display: 'grid', cols: 3, xl: { cols: 2 }, md: { cols: 1 } }}>{children}</Box>
}

export default JobsContainer
