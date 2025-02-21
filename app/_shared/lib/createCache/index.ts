interface CacheEntry<TData, TVariables> {
    data: TData
    variables: TVariables
}

interface OptionsType {
    onBeforeFetch?: () => void
}

const createCache = <TData, TVariables>(fetchFn: (variables: TVariables) => Promise<TData>) => {
    const cache = new Map<string, CacheEntry<any, any>>()

    const getCachedData = async (variables: TVariables, options: OptionsType = {}): Promise<TData> => {
        const { onBeforeFetch } = options
        const key = JSON.stringify(variables)
        const cachedEntry = cache.get(key)

        if (cachedEntry) {
            return Promise.resolve(cachedEntry.data)
        }

        onBeforeFetch?.()

        return fetchFn(variables).then((data) => {
            cache.set(key, { data, variables })

            return data
        })
    }

    const updateCache = (variables: TVariables, newDataFn: (cachedData: TData) => Partial<TData>): void => {
        const key = JSON.stringify(variables)
        const cachedEntry = cache.get(key)

        if (!cachedEntry) {
            return
        }

        const updatedData = { ...cachedEntry.data, ...newDataFn(cachedEntry.data) }

        cache.set(key, { data: updatedData, variables })
    }

    return [getCachedData, updateCache] as const
}

export default createCache
