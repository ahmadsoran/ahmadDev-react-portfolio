import env from 'react-dotenv'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useSelector } from 'react-redux';

export const portfolioAPI = createApi({
    reducerPath: 'portfolioAPI',
    baseQuery: fetchBaseQuery({
        // baseUrl: env.DB_URL,
        baseUrl: 'http://localhost:5000', // test    
        prepareHeaders: (headers, { getState }) => {
            const token = getState().tokenSlice.token
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', token)
            }

            return headers
        },
    }),
    endpoints: (builder) => ({

        getLikes: builder.query({
            query: () => 'liked',

        }),
        sendLikes: builder.mutation({

            query: (sendlikes) => ({
                url: 'liked',
                method: "PUT",
                body: sendlikes
            })
        }),
        loginUser: builder.mutation({
            query: (userData) => ({
                url: "/login",
                method: "POST",
                body: userData,
                credentials: 'include',

            })
        }),

        getDashboard: builder.query({
            query: () => {
                return { url: `/dashboard`, credentials: "include" };
            }
        }),
        projectUpload: builder.mutation({
            query: (userData) => ({
                url: "/uploadProjects",
                method: "POST",
                body: userData,
                credentials: 'include'

            })
        }),
        getProject: builder.query({
            query: () => {
                return { url: `/getProjects`, credentials: "include" };
            }
        }),
    }),
})

export const {
    useGetLikesQuery,
    useGetProjectQuery,
    useSendLikesMutation,
    useLoginUserMutation,
    useGetDashboardQuery,
    useProjectUploadMutation,
} = portfolioAPI
