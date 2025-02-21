import type { FC, PropsWithChildren } from 'react'
import { UnAuthProvider } from '@shared/providers/UnAuthProvider'

const layout: FC<PropsWithChildren> = ({ children }) => {
    return <UnAuthProvider>{children}</UnAuthProvider>
}

export default layout
