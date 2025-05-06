import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";
import Header from "../ShareModule/Header/Header";
import Footer from "../ShareModule/Footer/Footer";
import Loader from "../ShareModule/Loader/Loader";
import { check_token, check_name } from "../Redux/loginSlice";
import { useDispatch } from "react-redux";

import Pro from "../Components/OurProduct/Pro";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import ProductDet from "../Components/OurProduct/ProductDet";
import EditProduct from "../Components/OurProduct/EditProduct";
import UserDetails from "../Components/Pages/UserDetails";
import NoData from "../Components/Pages/NoData";
const Home = lazy(() => import("../Components/Home/Home"));
const About = lazy(() => import("../Components/AboutUs/About"));
const Blogs = lazy(() => import("../Components/Blogs/Blog"));
const BlogDetails = lazy(() => import("../Components/BlogDetails/BlogDetails"));






export default function Rout() {
  const dispatch = useDispatch();
 
  const PublicRouteNames = [
    {
      path:"/signup",
      Component:<SignUp/>
    },
    {
      path:"/signin",
      Component:<SignIn/>
    },
  ];
  const PrivateRouteNames = [
    {
      path:"/",
      Component:<Home/>
    },
    {
      path:"/about",
      Component:<About/>
    },
    {
      path:"/blogs",
      Component:<Blogs/>
    },
    {
      path:"/user/profile-details",
      Component:<UserDetails/>
    },
    {
      path:"/ourproduct",
      Component:<Pro/>
    },
    {
      path:"product/detail",
      Component:<ProductDet/>
    },
    {
      path:"product/detail/:id",
      Component:<EditProduct/>
    },
    {
      path:"/seeBlog/:id",
      Component:<BlogDetails/>
    },
    {
      path:"/nodata",
      Component:<NoData/>
    },
  ];

  useEffect(() => {
    dispatch(check_token())
  },[]);

  useEffect(() => {
    dispatch(check_name())
  },[]);

  function PrivateRoute({children}){
    const token = localStorage?.getItem("token") || sessionStorage?.getItem("token");
    // const First_Name = localStorage?.getItem("First_Name") || sessionStorage?.getItem("First_Name");
    return token !== null && token !== undefined  ? (children):(<Navigate to= "/signin"></Navigate>);
  }
  return (
    <React.Fragment>
        <Suspense fallback={<Loader/>}>
            <Router>
                <Header/>
                <Routes>
                    {PublicRouteNames?.map((route, index) => {
                      return(
                        <Route key={index + 1} exact path= {route.path} element={route.Component}/>
                      );
                    })}
                   {PrivateRouteNames?.map((route, index) => {
                    return(
                      <Route key={index + 2} path = {route.path} element={<PrivateRoute>{route.Component}</PrivateRoute>} />
                    );
                   })}

                    {/* <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp/>}/> */}
                    
                </Routes>
                <Footer/>
            </Router>
        </Suspense>
    </React.Fragment>
  )
}
