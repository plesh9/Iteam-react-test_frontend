import type { FC } from 'react'
import { Box, Spinner, Text } from 'vibe-library'
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
                <Text align='center'>The first request to the backend can take up to 5 minutes to load, please wait...</Text>
            </Box>
        </div>
    )
}

export default PageLoader
