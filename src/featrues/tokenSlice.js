import { createSlice } from "@reduxjs/toolkit";


const tokenSlice = createSlice({
    name: 'loginToken',
    initialState: {
        token: localStorage.getItem('token'),

    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
            localStorage.setItem('token', state.token)
        },

    }
})

export const { setToken } = tokenSlice.actions
export default tokenSlice.reducer;
