import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countValue : 0
}

export const conterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        handleIncrementByOne : (state,actions)=>{
            state.countValue += 1;
            // console.log(state.countValue)
        },
        handleDecrementByOne : (state,actions)=>{
            state.countValue -= 1;
            }
        }
    });
    // console.log(initialState.countValue)

export const { handleIncrementByOne ,handleDecrementByOne } = conterSlice.actions;

export default conterSlice.reducer;