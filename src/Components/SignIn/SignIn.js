import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn, reset_redirectRegistration } from "../../Redux/loginSlice";
import {ImLocation2, ImMail, } from "react-icons/im";
import {MdPhoneIphone} from "react-icons/md";
import "./SignInStyle.css";


export default function SignIn() {

  const navigate= useNavigate();
  const { redirectTo, redirectRegistration, isInRegistration} = useSelector((state) => state.logContent);
  const [myfirst_name, setMyFirst_Name] = useState("");
  
  const myfirstname = localStorage.getItem("First_Name");

 

   useEffect(() => {
    setMyFirst_Name(myfirstname)
   },[myfirstname]);
  
  const [user, setUser] = useState(
    {
  
    email: "",
    password: "",
  
  }
  );
  const [error, setError] = useState({});
  const dispatch = useDispatch();
 
  const validation = () => {
    let error = {};
  
    if (!user.email) {
      error.email = "Email is Required";
    } else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      user.email
    )) {
      error.email = "Please enter a valid email";
    }
    if (!user.password) {
      error.password = "Password is required";
    }
   
    return error;
  };
  
  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
   

    if (name === "email") {
      if (value.length === 0) {
        setUser({ ...user, email: "" });
        setError({ ...error, email: "Email is required" });
      } else {
        setUser({ ...user, email: value });
        setError({ ...error, email: "" });
      }
    }
    if (name === "password") {
      if (value.length === 0) {
        setUser({ ...user, password: "" });
        setError({ ...error, password: "Password is Required" });
      } else {
        setUser({ ...user, password: value });
        setError({ ...error, password: "" });
      }
    }
    
  };
  const Submit = (e) => {
    e.preventDefault();
    setError(validation());
    let data={
      "email":user.email,
      "password":user.password
     }
       
        dispatch(signIn(data));
     
  };
  const RedirectUser = () => {
    let token = localStorage?.getItem("token");
    let isInSignInPage = window.location.pathname.toLowerCase() === "/signin";

    if (token !== null && token !== undefined && token !== "") {
      
      isInSignInPage && navigate("/");
    }
  };

  

  useEffect(() => {
    RedirectUser();
  }, [redirectTo]);

  useEffect(() => {
    dispatch(reset_redirectRegistration(null));

  }, [redirectRegistration]);

  return (
    <>
      <div className="signin-content position-relative">
        <div className="signin-banner signinbanner-overlay position-relative">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 ">
                     <div className="col-header">  <h2 className="fw-bold text-capitalize">Sign In</h2></div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="signinblock position-relative">
        <div className="container">
          
          <div className="row justify-content-center">
           <div className="col-lg-7 col-md-9 col-12"> 
           <div className="signin__form position-relative"> 
              <form action="" className="position-relative" >
              
              <div className="form-group">
                <label for="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={user.email}
                  onChange={(e) => postUserData(e)}
                />
                <span style={{ color: "#ff0080", textAlign: "center" }}>
                  {error?.email}
                </span>
              </div>
              <div className="form-group">
                <label for="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Enter password"
                  name="password"
                  value={user.password}
                  onChange={(e) => postUserData(e)}
                />
                <span style={{ color: "#ff0080", textAlign:"center" }}>
                  {error?.password}
                </span>
              </div>
            
              <button type="submit" className="btn  btn-login" onClick={Submit}>
                Submit
              </button><br/>
              </form>
            </div>
              <ul className="registered_user">
              <li>
                {isInRegistration ?(<>
                <li className="registered_name text-center">{myfirst_name} - you have registered successfully.Now explore our site.</li>
                </>):(
                <>
                  <Link to="/signup">Sign Up</Link>
                </>)}
              </li>
            </ul>
            </div>
            <div className="col-lg-5 col-md-7 col-12">
                  <div className="quick__contact">
                    <h3 className="text-cuppink fw-600">Quick Contact</h3>
                    <p>If you have any questions simply use the following contact details.</p>
                    <ul className="quick__contact__det">
                      <li className="icon-box-wrapper  d-flex justify-content-center align-items-center row">
                        <div className="icon-box col-sm-2">
                          <a href="#" className="text-cuppink"><ImLocation2/></a>
                        </div>
                        <div className="icon-content col-sm-10"><h6 className="text-uppercase mb-0">Address:</h6><p className="mb-0">256, Baker Street,, New York, 5245</p>
                        </div>
                      </li>
                      <li className="icon-box-wrapper  d-flex justify-content-center align-items-center row">
                        <div className="icon-box col-sm-2">
                          <a href="#" className="text-cuppink"><ImMail/></a>
                        </div>
                        <div className="icon-content col-sm-10"><h6 className="text-uppercase mb-0">Email:</h6><p className="mb-0">thecakery@contact.co.in</p></div>
                      </li>
                      <li className="icon-box-wrapper  d-flex justify-content-center align-items-center row">
                        <div className="icon-box col-sm-2">
                          <a href="#" className="text-cuppink"><MdPhoneIphone/></a>
                        </div>
                        <div className="icon-content col-sm-10"><h6 className="text-uppercase mb-0">Phone:</h6><p className="mb-0">+61 3 8376 6284</p></div>
                      </li>
                    </ul>
                  </div>
            </div>
          </div>

          

         
            
        

        </div>
      </div> 
      
    </>
  );
}

