export type ApplyOptionType = {
    publisher: string
    apply_link: string
    is_direct: boolean
}

export type JobHighlightsType = {
    [key: string]: string[]
}

export type JobType = {
    job_id: string
    job_title: string
    employer_name: string
    employer_logo: string | null
    employer_website: string | null
    job_publisher: string
    job_employment_type: string
    job_employment_types: string[]
    job_apply_link: string
    job_apply_is_direct: boolean
    apply_options: ApplyOptionType[]
    job_description: string
    job_is_remote: boolean
    job_posted_at: string | null
    job_posted_at_timestamp: number | null
    job_posted_at_datetime_utc: string | null
    job_location: string
    job_city: string
    job_state: string
    job_country: string
    job_latitude: number
    job_longitude: number
    job_benefits: string[] | null
    job_google_link: string
    job_salary: string | null
    job_min_salary: number | null
    job_max_salary: number | null
    job_salary_period: string | null
    job_highlights: JobHighlightsType | null
    job_onet_soc: string | null
    job_onet_job_zone: string | null
}
