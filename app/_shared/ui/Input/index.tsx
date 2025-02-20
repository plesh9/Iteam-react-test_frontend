import type { InputHTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'
import { Box, classnames, Label, Text } from 'vibe-library'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    error?: string
    label?: ReactNode
}

const Input = forwardRef<HTMLInputElement, Props>(({ className, name, error, label, ...restProps }, ref) => {
    return (
        <Box className={className} ui={{ width: '100%', gap: 1 }}>
            {label && (
                <Label color={error ? 'red500' : 'black100'} htmlFor={name}>
                    {label}
                </Label>
            )}
            <input className={classnames(error && 'error_field')} ref={ref} name={name} {...restProps} />
            {error && (
                <Text size='12' color='red500'>
                    {error}
                </Text>
            )}
        </Box>
    )
})

Input.displayName = 'Input'

export default Input
