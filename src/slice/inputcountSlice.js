import { createSlice } from '@reduxjs/toolkit'

export const inpuCountSlice = createSlice({
  name: 'inputcounter',
  initialState: {
    value: 0
  },
  reducers: {
    increment:(state, action)=>{
      console.log(action)
        state.value+=1;
    },
    decrement:(state)=>{
        state.value-=1;
    },   
      incrementByAmount: (state, action) => {
        console.log(action.payload)
        state.value += action.payload
    },
  }
})

export const {increment, decrement, incrementByAmount } = inpuCountSlice.actions

export default inpuCountSlice.reducer