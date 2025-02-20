import type { FC, PropsWithChildren } from 'react'
import HeaderLayout from '@widgets/HeaderLayout'

const layout: FC<PropsWithChildren> = ({ children }) => {
    return <HeaderLayout>{children}</HeaderLayout>
}

export default layout
