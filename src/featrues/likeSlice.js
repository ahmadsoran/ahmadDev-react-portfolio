import { createSlice } from "@reduxjs/toolkit";


const likeSlice = createSlice({
    name: 'loginAuth',
    initialState:{
        likeNumber: localStorage.getItem('likes') 
    },
    reducers:{
      setLikes: (state , action)=>{
        state.likeNumber = action.payload
        localStorage.setItem('likes' , state.likeNumber)
      },
      setDidLike: (state , action)=>{
        localStorage.setItem('liked' , 'liked')
          
      }
    } 
})

export const {setLikes , setDidLike} = likeSlice.actions
export default likeSlice.reducer;
