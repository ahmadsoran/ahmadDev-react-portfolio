import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const portfolioAPI = createApi({
    reducerPath: "liked",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000",
    }),
    endpoints: (builder) => ({
        getLikes: builder.query({
            query: () => 'liked',

        }),
        sendLikes: builder.mutation({
           
            query: (sendlikes) => ({
                url: 'liked',
                method:"PUT",
                body: sendlikes
            })
            
        })

    }),

})

export const { useGetLikesQuery, useSendLikesMutation } = portfolioAPI