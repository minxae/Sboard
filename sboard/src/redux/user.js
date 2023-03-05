import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState : {
        userId : null,
        username : null,
        role: null,
        pfpLocation : null 

    },
    reducers : {
        setUser:  (state, action) => {
            state.userId =  action.payload.id
            state.username =  action.payload.username
            state.pfpLocation =  action.payload.pfpLocation
        }
    }
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;