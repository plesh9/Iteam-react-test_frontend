'use client'
import { useRouter } from 'next/navigation'
import { useEffect, type PropsWithChildren, type FC } from 'react'
import ROUTES from '@shared/const/routes'
import useAuthStore from '@shared/state/useAuthStore'

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const router = useRouter()
    const userData = useAuthStore((state) => state.userData)

    useEffect(() => {
        if (!userData) {
            router.replace(ROUTES.PUBLIC.searchJobs)
        }
    }, [userData, router])

    if (!userData) {
        return null
    }

    return children
}
