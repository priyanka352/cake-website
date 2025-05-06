import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "../Redux/loginSlice";
import {ProductSlice} from "../Redux/ProductSlice";
import {ProfileSlice} from "../Redux/ProfileSlice";

export const store = configureStore({
    reducer:{
        logContent:loginSlice.reducer,
        proContent:ProductSlice.reducer,
        profileContent:ProfileSlice.reducer,
    }
});