import axios from 'axios'

const rapidAxiosInstance = axios.create({
    baseURL: 'https://jsearch.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY
    }
})

rapidAxiosInstance.interceptors.response.use((response) => {
    if (response.data && response.data.status === 'ERROR') {
        return Promise.reject(new Error(response.data.error.message))
    }

    return response
})

export default rapidAxiosInstance
