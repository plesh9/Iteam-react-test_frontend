export interface BaseRapidResponseType<TData extends any> {
    status: 'ERROR' | 'OK'
    request_id: string
    data: TData
}
