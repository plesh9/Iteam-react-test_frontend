import type { FC, ReactNode } from 'react'
import { Box } from 'vibe-library'
import s from './PageLayout.module.scss'

interface Props {
    children: ReactNode
}

const PageLayout: FC<Props> = ({ children }) => {
    return (
        <Box
            className={s.main}
            ui={{
                p: 6,
                gap: 6,
                grow: true
            }}
        >
            {children}
        </Box>
    )
}

export default PageLayout
