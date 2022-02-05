import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import env from 'react-dotenv'
export const portfolioAPI = createApi({
    reducerPath: "liked",
    baseQuery: fetchBaseQuery({
        baseUrl: env.DB_URL,
        // baseUrl: 'http://localhost:5000', // test

    }),
    prepareHeaders(headers) {
        return headers;
    },

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
        })

    })

})



export const {
    useGetLikesQuery,
    useGetProjectQuery,
    useSendLikesMutation,
    useLoginUserMutation,
    useGetDashboardQuery,
    useProjectUploadMutation

} = portfolioAPI

