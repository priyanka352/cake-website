import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState = {
    upload_status: "idle",
    ProductData : [],
    list:[{}],
    totalpage:"",
    Editlist:[{}],
}

export const product = createAsyncThunk("/product/create", async(formData) => {
    let response = await axiosInstance.post(`/product/create`, formData);
    let res = response?.data;
    return res;
});

export const showProductList = createAsyncThunk("/product/list", async(formData)=>{
  let response = await axiosInstance.post(`/product/list`, formData);
  let res = response?.data;
  return res;
});

export const editProductList = createAsyncThunk("/product/detail/", async(id) => {
    let response = await axiosInstance.get(`/product/detail/${id}`);
    let res = response?.data;
    return res;
});

export const editProductData = createAsyncThunk("/update", async(formData) => {
  let response = await axiosInstance.post(`/product/update`, formData);
  let res = response?.data;
  return res;
});

export const deleteProduct = createAsyncThunk("/product/remove", async(formData) => {
    let response = await axiosInstance.post(`/product/remove`, formData);
    let res = response?.data;
    return res;
})

export const ProductSlice = createSlice({
    name: "Product",
    initialState,

    extraReducers: (builder) => {
        builder
        .addCase(product.pending, (state, {payload}) => {
            state.upload_status = "loading";
        })
        .addCase(product.fulfilled, (state, {payload}) => {
            state.upload_status = "fulfilled";
        })
        .addCase(product.rejected, (state, {payload})=> {
            state.upload_status = "rejected";
        })
        .addCase(showProductList.pending, (state, {payload}) => {
            state.upload_status = "loading";
        })
        .addCase(showProductList.fulfilled, (state, {payload})=>{
           state.upload_status="product list fetched";
           state.list=payload?.data;
           state.totalpage=payload?.totalPages; 
        })
        .addCase(showProductList.rejected, (state, {payload}) => {
            state.upload_status = "error.message";
        })
        .addCase(editProductList.pending, (state, {payload}) => {
            state.upload_status = "loading";
        })
        .addCase(editProductList.fulfilled, (state, {payload}) => {
            state.upload_status = "data to be edited is fetched successfully";
            state.Editlist = payload?.data;
        })
        .addCase(editProductList.rejected, (state, {payload}) => {
            state.upload_status = "error.message";
        })
        .addCase(editProductData.pending, (state, {payload}) => {
            state.upload_status = "loading";
        })
        .addCase(editProductData.fulfilled, (state, {payload}) => {
            state.upload_status = "edited data received";
        })
        .addCase(editProductData.rejected, (state, {payload}) => {
            state.upload_status = "error.message";
        })
        .addCase(deleteProduct.pending, (state, {payload}) => {
            state.upload_status = "loading";
        })
        .addCase(deleteProduct.fulfilled, (state, {payload}) => {
            state.upload_status = "product removed successfully";
        })
        .addCase(deleteProduct.rejected, (state, {payload}) => {
            state.upload_status = "error.message";
        })


    }
}
  
);

export default ProductSlice;