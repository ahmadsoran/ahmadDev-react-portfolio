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
        removeToken: (state, action) => {
            state.token = action.payload
            localStorage.removeItem(state.token)
        },

    }
})

export const { setToken, removeToken } = tokenSlice.actions
export default tokenSlice.reducer;
