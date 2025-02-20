const ROUTES = {
    PUBLIC: {
        searchJobs: '/',
        jobDetails: (jobId: string) => `/job-details/${jobId}`,
        liked: '/liked'
    },
    AUTH: {
        profile: '/profile',
        jobs: '/jobs'
    },
    UN_AUTH: {
        createProfile: '/create-profile'
    }
}

export default ROUTES
