'use client'
import { useRouter } from 'next/navigation'
import { useEffect, type PropsWithChildren, type FC } from 'react'
import ROUTES from '@shared/const/routes'
import useAuthStore from '@shared/state/useAuthStore'

export const UnAuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const router = useRouter()
    const userData = useAuthStore((state) => state.userData)

    useEffect(() => {
        if (userData?.id) {
            router.replace(ROUTES.AUTH.profile)
        }
    }, [userData, router])

    if (userData?.id) {
        return null
    }

    return children
}
