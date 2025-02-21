import type { FC } from 'react'
import { Box, Spinner } from 'vibe-library'
import s from './PageLoader.module.scss'

const PageLoader: FC = () => {
    return (
        <div className={s.main}>
            <Box
                ui={{
                    gap: 2,
                    align: 'center',
                    justify: 'center',
                    grow: true,
                    maxWidth: 100
                }}
            >
                <Spinner size='24' color='blue500' />
            </Box>
        </div>
    )
}

export default PageLoader
