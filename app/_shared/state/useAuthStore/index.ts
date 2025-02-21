import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import generateId from '@shared/lib/generateId'
import type { UserDataType } from '@shared/types/user'
import { Alert } from '../useAlertStore'

export interface UseAuthStoreType {
    userData: UserDataType | null
    setUserData: (userData: UserDataType | null) => void
    login: (userData: Omit<UserDataType, 'id'>) => void
    logout: () => Promise<void>
}

export const LOCAL_STORAGE_USER_DATA_KEY = 'userData'

const useAuthStore = create<UseAuthStoreType>()(
    devtools(
        (set) => ({
            userData: null,
            setUserData: (userData) => set({ userData }),
            login: (userData) => {
                const newUser = {
                    ...userData,
                    id: generateId()
                }

                localStorage.setItem(LOCAL_STORAGE_USER_DATA_KEY, JSON.stringify(newUser))
                set({ userData: newUser })
                Alert('success', 'You have successfully logged in!')
            },
            logout: () => {
                localStorage.removeItem(LOCAL_STORAGE_USER_DATA_KEY)
                set({ userData: null })
                Alert('success', 'You have successfully logged out!')
            }
        }),
        { name: 'useAuthStore' }
    )
)

export default useAuthStore
