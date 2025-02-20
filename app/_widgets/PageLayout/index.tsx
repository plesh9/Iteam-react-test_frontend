import type { FC, ReactNode } from 'react'
import { Box } from 'vibe-library'
import Container from '@shared/ui/Container'

interface Props {
    children: ReactNode
}

const PageLayout: FC<Props> = ({ children }) => {
    return (
        <Container>
            <Box
                ui={{
                    p: 6,
                    gap: 6,
                    grow: true
                }}
            >
                {children}
            </Box>
        </Container>
    )
}

export default PageLayout
