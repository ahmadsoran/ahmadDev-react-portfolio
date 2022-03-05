
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const portfolioAPI = createApi({
    reducerPath: 'portfolioAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://ahmad-portfolio-backend.herokuapp.com',
        // baseUrl: 'http://localhost:5000', // test    
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
        getContact: builder.query({
            query: () => {
                return { url: `/getContact` };
            },
        }),
        getContactById: builder.query({
            query: (id) => {
                if (id) {
                    return { url: `/getContact/${id}` };
                } else {
                    return { url: undefined };
                }


            },

        }),
        sendContact: builder.mutation({
            query: (contact) => ({
                url: "/contact",
                method: "POST",
                body: contact,

            })
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/deleteContact/${id}`,
                method: "DELETE",
                body: id,
                credentials: 'include'
            })

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
    useGetContactQuery,
    useSendContactMutation,
    useGetContactByIdQuery,
    useDeleteContactMutation,
} = portfolioAPI
