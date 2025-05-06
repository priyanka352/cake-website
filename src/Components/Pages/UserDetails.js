import React, {useEffect} from 'react';
import {profileDetails} from "../../Redux/ProfileSlice";
import {useSelector, useDispatch} from "react-redux";
import { profileDetailsPath } from '../../Helper/Helper';

export default function UserDetails() {
    const {profile} = useSelector((state) => state.profileContent);
    console.log(profile);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(profileDetails());
    },[]);
  return (
    <>
     <div className="about_us_block position-relative">
        <div className="about_us_block_banner about_us_block_overlay position-relative">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 ">
                <div className="col-header-about">
                  <h2 className="fw-bold text-capitalize">User Profile</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about_bakery p-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about_bakery_content">
                <h2 className="position-relative">
                  Top Users who have explored our website this week. Hurry up and register to explore our website
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="latest-item">
                <img
                  className="img-fluid"
                  src="/images/test-1.png"
                  alt="latest-item"
                />
                <h6>Adam Shaun</h6>
                <p>Lorem ipsum dolor amet, consetec adipiscing elit. magna</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="latest-item">
                <img
                  className="img-fluid"
                  src="/images/test-2.png"
                  alt="latest-item"
                />
                <h6>Martin Cook</h6>
                <p>Lorem ipsum dolor amet, consetec adipiscing elit. magna</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="latest-item">
                <img
                  className="img-fluid"
                  src="/images/test-3.png"
                  alt="latest-item"
                />
                <h6>David Marsh</h6>
                <p>Lorem ipsum dolor amet, consetec adipiscing elit. magna</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="latest-item">
                <img
                  className="img-fluid"
                  src="/images/test-2.png"
                  alt="latest-item"
                />
                <h6>Christopher Cook</h6>
                <p>Lorem ipsum dolor amet, consetec adipiscing elit. magna</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about_bakery p-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about_bakery_content">
                <h2 className="position-relative">Check Your Profile Data</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center"> 
            <div className="grid col-lg-6">
              <h5>{profile?.data?.first_name}</h5>
              <h5>{profile?.data?.last_name}</h5>
              <h6>{profile?.data?.email}</h6>
              <div>
                {/* <img className="img-fluid" src={profile?.data?.image ? profileDetailsPath(profile?.data?.image) : "error"} alt="profilepic" /> */}
                <img className="img-fluid" src="/images/test-1.png" alt="profilepicture"/>
             </div>
            </div>
        </div>    
      </div>
    </>
  )
}
