'use client'
import { Box } from 'vibe-library'

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
    return (
        <Box
            ui={{
                gap: 4,
                align: 'center',
                justify: 'center',
                grow: true
            }}
        >
            <h1>{error.message}</h1>
            <button onClick={reset} type='button'>
                Reset
            </button>
        </Box>
    )
}

export default error
