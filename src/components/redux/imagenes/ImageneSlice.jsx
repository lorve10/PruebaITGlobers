import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'imagen',
  initialState: {
    lista : 0   
  },
  reducers: {
    increment: state => {
      if(state.lista >=2){
        state.lista = 0;
      }else{
        state.lista += 1
      }
    },
    decrement: state => {
        if(state.lista <=0){
            state.lista = 2;
          }else{
            state.lista -= 1
          }
    },
    
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer