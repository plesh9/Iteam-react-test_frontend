'use client'
import type { PropsWithChildren } from 'react'
import { useLayoutEffect, useState, type FC } from 'react'
import useAuthStore, { LOCAL_STORAGE_USER_DATA_KEY } from '@shared/state/useAuthStore'
import PageLoader from '@widgets/PageLoader'

const UserProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const setUserData = useAuthStore((state) => state.setUserData)

    useLayoutEffect(() => {
        const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_DATA_KEY) || '{}')
        const isValidUserData = 'id' in userData

        setUserData(isValidUserData ? userData : null)
        setIsLoading(false)
    }, [setUserData])

    if (isLoading) {
        return <PageLoader />
    }

    return children
}

export default UserProvider
