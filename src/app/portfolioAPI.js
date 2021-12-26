import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const portfolioAPI = createApi({
    reducerPath: "fans",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000",
    }),
    endpoints: (builder) => ({
        getLikes: builder.query({
            query: () => 'fans',

        }),


    }),

})

export const { useGetLikesQuery, useAddLikeMutation } = portfolioAPI