import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState = {
    upload_status: "idle",
    profile: {},
}

export const profileDetails = createAsyncThunk("/user/profile-details", async() => {
    let response = await axiosInstance.get(`/user/profile-details`);
    let res = response?.data;
    return res;
});

export const ProfileSlice = createSlice({
    name:"Profile",
    initialState,
    extraReducers:(builder) => {
            builder
            .addCase(profileDetails.pending, (state, {payload}) => {
                state.upload_status = "loading";
            })
            .addCase(profileDetails.fulfilled, (state, {payload}) => {
                state.upload_status = "success";
                state.profile = payload;
            })
            .addCase(profileDetails.rejected, (state, {payload}) => {
                state.upload_status = "error.message";
            })
    }
});

export default ProfileSlice;