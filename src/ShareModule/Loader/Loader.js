import React from "react";
import "./LoaderStyle.css";

export default function Loader() {
  return (
   <React.Fragment>
    <div className="loader">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
                <div className="loader-body">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
                </div>
            </div>
          </div>  
        </div>
    </div>
   </React.Fragment>
  )
}
