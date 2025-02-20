'use client'
import type { FC, PropsWithChildren } from 'react'
import { Box } from 'vibe-library'
import ROUTES from '@shared/const/routes'
import Container from '@shared/ui/Container'
import s from './HeaderLayout.module.scss'
import MenuItem from './ui/MenuItem'

const HeaderLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box className={s.wrapper}>
            <Box className={s.main}>
                <Container ui={{ px: 6, justify: 'center' }}>
                    <Box ui={{ flexDirection: 'row', align: 'center', gap: 4 }}>
                        <MenuItem href={ROUTES.PUBLIC.searchJobs}>Search Jobs</MenuItem>
                        <MenuItem href={ROUTES.PUBLIC.liked}>Liked Jobs</MenuItem>
                    </Box>
                </Container>
            </Box>
            {children}
        </Box>
    )
}

export default HeaderLayout
