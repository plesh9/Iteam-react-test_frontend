'use client'
import type { FC } from 'react'
import type { ColorsType } from 'vibe-library'
import { classnames } from 'vibe-library'
import s from './LineHorizontal.module.scss'

interface Props {
    color?: ColorsType
}

const LineHorizontal: FC<Props> = ({ color = 'black10p' }) => {
    return <div className={classnames(s.main, `background_${color}`)} />
}

export default LineHorizontal
