import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookingDetails:null,
    error:null,
    loading:false,
}


const bookingSlice = createSlice({
    name:"booking",
    initialState,
    reducers:{
        bookingStart:(state)=>{
            state.loading = true;
        },
        bookingSuccess:(state,action)=>{
            state.currentBooking=action.payload;
            state.loading=false;
            state.error=null;
        },
        bookingFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const {bookingStart,bookingSuccess,bookingFailure}=bookingSlice.actions

export default bookingSlice.reducer;