import React from 'react';
import {Link} from "react-router-dom";
import "./PageStyle.css";

export default function NoData() {
  return (
    <>  
        <div className="nodata p-100"> 
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div><img className="img-fluid" src="/images/404.png" alt="404"/></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="nodata-text">
                            <h5>Page Cannot Be Found!</h5>
                            <p>Seems like nothing was found at this location. Try something else or you can go back to the homepage following the button below!</p>
                            <Link to="/"><button className="btn nodata-btn">Go to Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </>
  )
}
