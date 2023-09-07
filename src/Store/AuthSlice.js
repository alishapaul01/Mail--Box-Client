import { createSlice } from '@reduxjs/toolkit';

const email = localStorage.getItem("email");
const token = localStorage.getItem("token");

const initialAuthState = {token: token, isLoggedIn:!!token, email:email};

const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers: {
        login(state, action) {
            localStorage.setItem("token", action.payload.idToken);
            localStorage.setItem("email", action.payload.email.split('@')[0]);
            state.token = action.payload.idToken
            state.email = action.payload.email.split('@')[0]
            state.isLoggedIn = true;
        },
        logout(state){
           localStorage.removeItem("token");
           localStorage.removeItem("email");
           state.token = null;
           state.email = null; 

        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;