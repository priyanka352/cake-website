import React from 'react';
import "./footerStyle.css";
import {FaFacebookF, FaLinkedinIn, FaTwitter, FaGooglePlusG} from "react-icons/fa";

export default function Footer() {
  return (
   <React.Fragment>
    <div className="footer_area"> 
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget">
                        <img src="/images/footer-cake.jpg" alt="logo" className="img-fluid" />
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui bland itiis praesentium voluptatum deleniti atque corrupti.</p>
                        <ul className="footer-socials d-flex justify-content-center">
                            <li><a href="#"><FaFacebookF/></a></li>
                            <li><a href="#"><FaLinkedinIn/></a></li>
                            <li><a href="#"><FaTwitter/></a></li>
                            <li><a href="#"><FaGooglePlusG/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget footer-link-widget">
                        <div className="f_title mb-20">
                            <h3 className="text-white">Quick Links</h3>
                        </div>
                        <ul className="footer-list-style">
                            <li><a className="text-capitalize" href="#">your account</a></li>
                            <li><a className="text-capitalize" href="#">view order</a></li>
                            <li><a className="text-capitalize" href="#">privacy policy</a></li>
                            <li><a className="text-capitalize" href="#">terms & conditions</a></li>

                        </ul>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget footer-link-widget">
                        <div className="f_title mb-20">
                            <h3 className="text-white">Work Times</h3>
                        </div>
                        <ul className="footer-list-style">
                            <li><a href="#">Mon-Fri: 8 am - 8 pm</a></li>
                            <li><a href="#">Sat: 9 am - 4 pm</a></li>
                            <li><a href="#">Sun: Closed</a></li>
                            

                        </ul>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget footer-contact-widget">
                        <div className="f_title mb-20">
                            <h3 className="text-white">Contact Info</h3>
                        </div>
                        <h4>(1800) 574 9687</h4>
                        <p>Justshop Store <br />256, Baker Street,, New York, 5245</p>
                        <h5>thecakery@contact.co.in</h5>
                    </div>
                </div>
            </div>
            <hr className="bg-white"/>
            <div className="row">
                <div className="col-lg-8">
                    <div className="copyright"><h4>© Copyright AP's cakebakery theme. All right reserved.</h4></div>
                </div>
                <div className="col-lg-4">
                <div className="copyright"><h4>Purchase Now</h4></div>
                </div>
            </div>
        </div>
    </div>
   </React.Fragment>
  )
}
