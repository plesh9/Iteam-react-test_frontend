import type { FC } from 'react'
import { Box } from 'vibe-library'
import ROUTES from '@shared/const/routes'
import useAuthStore from '@shared/state/useAuthStore'
import MenuItem from '..'

const AuthButtons: FC = () => {
    const userData = useAuthStore((state) => state.userData)

    if (!userData) {
        return (
            <Box ui={{ flexDirection: 'row', align: 'center', gap: 4 }}>
                <MenuItem href={ROUTES.UN_AUTH.createProfile}>Login</MenuItem>
            </Box>
        )
    }

    return (
        <Box ui={{ flexDirection: 'row', align: 'center', gap: 4 }}>
            <MenuItem href={ROUTES.AUTH.jobs}>Jobs</MenuItem>
            <MenuItem href={ROUTES.AUTH.profile}>Profile</MenuItem>
        </Box>
    )
}

export default AuthButtons
