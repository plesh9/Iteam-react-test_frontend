'use client'
import type { FC } from 'react'
import { Box, Button, Text, Title } from 'vibe-library'
import useAuthStore from '@shared/state/useAuthStore'
import PageLayout from '@widgets/PageLayout'

const page: FC = () => {
    const userData = useAuthStore((state) => state.userData!)
    const logout = useAuthStore((state) => state.logout)

    return (
        <PageLayout>
            <Box ui={{ gap: 1 }}>
                <Title>{userData.name}</Title>
                <Title variant='h3'>Desired job title: {userData.desiredJobTitle}</Title>
                {userData.description && <Text>{userData.description}</Text>}
            </Box>
            <Button onClick={logout} icon='logout' size='small'>
                Logout
            </Button>
        </PageLayout>
    )
}

export default page
