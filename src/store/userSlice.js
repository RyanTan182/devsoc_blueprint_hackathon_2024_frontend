import { createSlice } from "@reduxjs/toolkit";

const INITIAL_USER_SLICE_STATE = {
    username: "",
    email: "",
    payId: "",
};

const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_USER_SLICE_STATE,
    reducers: {
        setUser(state, action) {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.payId = action.payload.payId;
        },
        reinitalizeUser(state) {
            state.username = "";
            state.email = "";
            state.payId = "";
        },
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;