import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState = {
    upload_status: "idle",
    upload_message: "idle",
    isLoggedIn: false,
    redirectTo: null,
    isInRegistration: false,
    redirectRegistration: null,
}

export const signUp = createAsyncThunk("/user/signup", async (formData) => {
    let response = await axiosInstance.post("/user/signup", formData);
    let res = response?.data;
    return res;
});

export const signIn = createAsyncThunk("/user/signin", async (formData) => {
    let response = await axiosInstance.post("/user/signin", formData);
    let res = response?.data;
    return res;
});



export const loginSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {
        reset_redirectTo: (state, { payload }) => {
            state.redirectTo = payload;
        },
        check_token: (state, { payload }) => {
            let token = localStorage?.getItem("token");
            if (token !== null && token !== undefined) {
                state.isLoggedIn = true;
            }
        },
        handleLoggedOut: (state, { payload }) => {
            localStorage.removeItem("token");
            state.isLoggedIn = false;
        },
        reset_redirectRegistration: (state, { payload }) => {
            state.redirectRegistration = payload;
        },
        check_name: (state, { payload }) => {
            let First_Name = localStorage?.getItem("First_Name");
            if (First_Name !== null && First_Name !== undefined) {
                state.isInRegistration = true;
            }
        },
        handleRedirectRegistration: (state, { payload }) => {
            localStorage?.removeItem("First_Name");
            state.isInRegistration = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signIn.pending, (state, { payload }) => {
            state.upload_status = "loading";
        })
            .addCase(signIn.fulfilled, (state, { payload }) => {
                if (payload?.status == 200) {
                    state.upload_status = "fulfilled";
                    localStorage?.setItem("token", payload?.token);
                    localStorage?.setItem("first_name", payload?.data.first_name);
                    //localStorage?.setItem("Myemail", payload?.data.email);
                    state.redirectTo = "/";
                    state.isLoggedIn = true;
                }

            })
            .addCase(signIn.rejected, (state, { payload }) => {
                state.upload_status = "rejected";
            })
            .addCase(signUp.pending, (state, { payload }) => {
                state.upload_status = "loading";
            })
            .addCase(signUp.fulfilled, (state, { payload }) => {
                state.upload_status = "fulfilled";
                if (payload?.status == 200) {
                    localStorage?.setItem("First_Name", payload?.data.first_name);
                    state.isInRegistration = true;
                    state.redirectRegistration = "/signin";
                }
              
            })
            .addCase(signUp.rejected, (state, { payload }) => {
                state.upload_status = "rejected";
            })

    }
});

export const { reset_redirectTo, check_token, handleLoggedOut, reset_redirectRegistration, check_name, handleRedirectRegistration } = loginSlice.actions;