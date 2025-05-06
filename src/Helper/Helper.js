import axios from "axios";

let adminURL = "https://wtsacademy.dedicateddevelopers.us/api";
let frontEndURL = "https://wtsacademy.dedicateddevelopers.us/api";

if (process.env?.REACT_APP_ENV === "production"){
    adminURL = "https://wtsacademy.dedicateddevelopers.us/api";
    frontEndURL = "https://wtsacademy.dedicateddevelopers.us/api";
}

export const baseURL = adminURL;
let axiosInstance = axios.create({
    baseURL,
});

export const productDetailsPath = (media) => {
  return adminURL+`/uploads/product/${media}`;
}

export const profileDetailsPath = (media) => {
  return adminURL+`uploads/user/profile_pic/${media}`;
}
axiosInstance.interceptors.request.use(
    async function (config) {
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");
      if (token !== null || token !== undefined) {
        config.headers["x-access-token"] = token;
      }
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );
  

  

export default axiosInstance;