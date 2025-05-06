import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../Redux/loginSlice";
import {useNavigate} from "react-router-dom";
import "./SignUpStyle.css";
import ParticlesBg from "../Particles/ParticlesBg";

export default function SignUp() {
    const { redirectRegistration } = useSelector((state) => state.logContent);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    
  });
  const [profile_pic, setProfile_Pic] = useState("");
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validation = () => {
    let error = {};
    if (!user.first_name) {
      error.first_name = "Please enter your firstname";
    }
    if (!user.last_name) {
      error.last_name = "Please enter your lastname";
    }
    if (!user.email) {
      error.email = "Email is Required";
    } else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      user.email
    )) {
      error.email = "Please enter a valid email";
    }
    if (!user.password) {
      error.password = "Please enter password";
    }
   
    return error;
  };
  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "first_name") {
      if (value.length === 0) {
        setUser({ ...user, first_name: "" });
        setError({ ...error, first_name: "Please enter your firstname" });
      } else {
        setUser({ ...user, first_name: value });
        setError({ ...error, first_name: "" });
      }
    }
    if (name === "last_name") {
      if (value.length === 0) {
        setUser({ ...user, last_name: "" });
        setError({ ...error, last_name: "Please enter your lastname" });
      } else {
        setUser({ ...user, last_name: value });
        setError({ ...error, last_name: "" });
      }
    }

    if (name === "email") {
      if (value.length === 0) {
        setUser({ ...user, email: "" });
        setError({ ...error, email: "Please enter your email" });
      } else {
        setUser({ ...user, email: value });
        setError({ ...error, email: "" });
      }
    }

    if (name === "password") {
      if (value.length === 0) {
        setUser({ ...user, password: "" });
        setError({ ...error, password: "Please enter password" });
      } else {
        setUser({ ...user, password: value });
        setError({ ...error, password: "" });
      }
    }

    
  };

  const submit = (e) => {
    e.preventDefault();
    setError(validation());
    let formData = new FormData();
    formData.append("first_name", user.first_name);
    formData.append("last_name", user.last_name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    // formData.append("mobile", user.mobile);
    formData.append("profile_pic", profile_pic);
    dispatch(signUp(formData));
  };

  const RedirectUser = () => {
    let First_Name = localStorage?.getItem("First_Name");
    let isInSignUpPage = window.location.pathname.toLowerCase() === "/signup";
    if(First_Name !== null && First_Name !== undefined && First_Name !== ""){
        isInSignUpPage && navigate("/signin");
    }
  };

  useEffect(() => {
    RedirectUser();

  }, [redirectRegistration]);
  return (
    <React.Fragment>
      <ParticlesBg/>
      
       <div className="registration-block position-relative">
        <div className="container">
          <h2 className="text-center text-white fw-bold">Sign Up</h2>
          <div className="row mt-3"> 
            
            <div className="col-lg-4">
                <div className="glow-image position-relative">
                    <img src="/images/signup-glow.png" alt="cake" />
                </div>
                
            </div>
            <div className="col-lg-8">
                <form action="" className="signup-form">
                    <div className="form-group">
                    <label for="name">First Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        value={user.first_name}
                        onChange={(e) => postUserData(e)}
                    />
                    <span style={{ color: "black", textAlign: "center" }}>
                        {error?.first_name}
                    </span>
                    </div>
                    <div className="form-group">
                    <label for="name">Last Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        value={user.last_name}
                        onChange={(e) => postUserData(e)}
                    />
                    <span style={{ color: "black", textAlign: "center" }}>
                        {error?.last_name}
                    </span>
                    </div>
                    <div className="form-group">
                    <label for="name">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={user.email}
                        onChange={(e) => postUserData(e)}
                    />
                    <span style={{ color: "black", textAlign: "center" }}>
                        {error?.email}
                    </span>
                    </div>
                    <div className="form-group">
                    <label for="name">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={user.password}
                        onChange={(e) => postUserData(e)}
                    />
                    <span style={{ color: "black", textAlign: "center" }}>
                        {error?.password}
                    </span>
                    </div>
                    
                    <div className="form-group">
                    <label>Image:</label>
                    <input
                        type="file"
                        onChange={(e) =>  setProfile_Pic(e.target.files[0])}
                        name="profile_pic"
                        accept="image/*"
                    />
                    <span style={{ color: "black", textAlign:"center" }}>
                        
                        {error?.profile_pic}
                    </span>
                    </div>
                    <div className="form-group form-check">
                    <label className="form-check-label">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                    />
                    Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-submit" onClick={submit}>
                    Submit
                </button>
                </form>
            </div>
          </div>
        </div>
      </div> 
      
    </React.Fragment>
  );
}
