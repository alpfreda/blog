import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: '/',
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Time', 'Posts', 'Counter'],
  endpoints: () => ({}),
})

export const enhancedApi = api.enhanceEndpoints({
  endpoints: () => ({

  })
})
