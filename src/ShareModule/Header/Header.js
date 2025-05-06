import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, NavLink, useNavigate} from "react-router-dom";
import { handleLoggedOut, handleRedirectRegistration } from "../../Redux/loginSlice";

import "./headerStyle.css";

export default function Header() {
  const {isLoggedIn} = useSelector((state) => state.logContent);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logged_in, setLogged_In] = useState("");
  let first_name = localStorage?.getItem("first_name");

  useEffect(() => {
    setLogged_In(first_name);
  }, [first_name]);

  const signout = () => {
      dispatch(handleLoggedOut());
      navigate("/signin");
  }
  return (
    <React.Fragment>
     <div className="header-area">   
      <div className="container">
        <nav className="navbar justify-content-between navbar-expand-lg navbar-light">
           
          <Link to="/"><a className="navbar-brand" href="#">
            <img src="/images/cake-2.jpg" alt="logo" className="img-fluid" />
          </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
               <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/about">About</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/ourproduct">Our Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/product/detail">
                   Product Details
                </NavLink>
              </li>
              {/* <li className="nav-item">
               <NavLink to="/pro">Create Products</NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/product/detail">Product Details</NavLink>
              </li> */}
              <li className="nav-item">
               <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li className="nav-item dropdown">
               <NavLink to="#">  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pages
                  </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  {/* <NavLink to="/user/profile-details"><a className="dropdown-item" href="#">User Details</a></NavLink> */}
                  <NavLink to="/nodata"><a className="dropdown-item" href="#">404 Page
                  </a></NavLink>
                  
                </div>
                </NavLink>
              </li>
              {/* <li className="nav-item">
               <NavLink to="/user/profile-details">User Details</NavLink>
              </li> */}
              <li className="nav-item">
                {isLoggedIn ?(
                <>
                    <li className="sign-out" onClick={() => {
                      signout();
                      dispatch(handleRedirectRegistration());
                    }}>SignOut</li>
                </>):(<Link to="/signin">
                  <li className="nav-item">SignIn</li>
                </Link>)}
              </li> 
              <li className="nav-item">
                 {isLoggedIn? (<>
                  <NavLink to="/user/profile-details"><a className="dropdown-item" href="#">Hii {logged_in}</a></NavLink>
                   {/* <li className="nav-item user_name">Hii {logged_in}</li> */}
                 </>):(null)}
              </li> 
              
            </ul>
           
          </div>
         
        </nav>
      </div>
      </div> 
    </React.Fragment>
  );
}
