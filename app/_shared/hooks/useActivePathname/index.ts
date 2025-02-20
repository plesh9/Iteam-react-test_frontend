import { usePathname } from 'next/navigation'

export const useActivePathname = (href?: string): boolean => {
    const pathname = usePathname()

    if (!href) {
        return false
    }

    if (href === '/' && pathname === href) {
        return true
    }

    if (href !== '/' && pathname.startsWith(href)) {
        return true
    }

    return false
}
