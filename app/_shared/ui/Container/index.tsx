import type { FC, ReactNode } from 'react'
import type { BoxPropsType } from 'vibe-library'
import { Box, classnames } from 'vibe-library'
import s from './Container.module.scss'

type Props = BoxPropsType & {
    children: ReactNode
}

const Container: FC<Props> = ({ children, ui, className, ...rest }) => {
    return (
        <Box className={classnames(s.main, className)} ui={{ grow: true, ...ui }} {...rest}>
            {children}
        </Box>
    )
}

export default Container
