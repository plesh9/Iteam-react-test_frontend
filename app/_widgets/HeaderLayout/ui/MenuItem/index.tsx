import Link from 'next/link'
import type { FC, ReactNode } from 'react'
import { classnames, Text } from 'vibe-library'
import { useActivePathname } from '@shared/hooks/useActivePathname'

interface Props {
    href: string
    children: ReactNode
}

const MenuItem: FC<Props> = ({ href, children }) => {
    const isActive = useActivePathname(href)

    return (
        <Text as={Link} href={href} className={classnames(!isActive && 'hover-opacity')} color={isActive ? 'black100' : 'black45p'} weight='500'>
            {children}
        </Text>
    )
}

export default MenuItem
