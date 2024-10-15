import { createSlice } from "@reduxjs/toolkit";

const INITIAL_AUTH_SLICE_STATE = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_AUTH_SLICE_STATE,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        
        logout(state) {
            state.isAuthenticated = false;
        },
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;