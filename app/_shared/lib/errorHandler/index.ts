import { isAxiosError } from 'axios'
import { Alert } from '@shared/state'

export const isAbortError = (error: any) => error?.networkError?.name === 'AbortError' || error?.name === 'AbortError' || error?.name === 'CanceledError'

const errorHandler = (error: any) => {
    if (isAbortError(error)) {
        return
    }

    const message = isAxiosError(error) ? error.response?.data.message : error.message || 'An error occurred. Please try again.'

    Alert('error', message)
    throw new Error(error)
}

export default errorHandler
