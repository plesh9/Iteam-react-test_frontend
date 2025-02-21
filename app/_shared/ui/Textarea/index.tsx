import type { ReactNode, TextareaHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import { Box, classnames, Label, Text } from 'vibe-library'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string | false
    label?: ReactNode
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(({ className, name, error, label, ...restProps }, ref) => {
    return (
        <Box className={className} ui={{ width: '100%', gap: 1 }}>
            {label && (
                <Label color={error ? 'red500' : 'black100'} htmlFor={name}>
                    {label}
                </Label>
            )}
            <textarea className={classnames(error && 'error_field')} ref={ref} name={name} {...restProps} />
            {error && (
                <Text size='12' color='red500'>
                    {error}
                </Text>
            )}
        </Box>
    )
})

Textarea.displayName = 'Textarea'

export default Textarea
