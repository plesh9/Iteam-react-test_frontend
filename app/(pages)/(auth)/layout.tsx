import type { FC, PropsWithChildren } from 'react'
import { AuthProvider } from '@shared/providers/AuthProvider'

const layout: FC<PropsWithChildren> = ({ children }) => {
    return <AuthProvider>{children}</AuthProvider>
}

export default layout
