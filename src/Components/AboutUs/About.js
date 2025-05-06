import React from 'react';
import "./AboutStyle.css";
import {CgPlayButtonO} from "react-icons/cg";


export default function About() {
  return (
   <>
     <div className="about_us_block position-relative">
        <div className="about_us_block_banner about_us_block_overlay position-relative">
          <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 ">
                     <div className="col-header col-header-about"> 
                      <h2 className="fw-bold text-capitalize">About Us</h2></div>
                </div>
              </div>
            </div>
        </div>
     </div>
     <div className="about_bakery p-100">
       <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about_bakery_content">
                <h2 className="position-relative">Our Bakery Approach</h2>
                <h5>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h5>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem.</p>
            </div>
          </div>

        </div>
        <div className="row bakery_image justify-content-center align-items-center">
          <div className="col-lg-4 col-md-6 col-sm-8 col-10">
            <div className="about-bakery-image position-relative">
              <img className="img-fluid" src="/images/about-bakery-image-1.jpg" alt="bakery"/>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8 col-10">
          <div className="about-bakery-image position-relative">
              <img className="img-fluid" src="/images/about-bakery-image-2.jpg" alt="bakery"/>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8 col-10">
          <div className="about-bakery-image position-relative">
              <img className="img-fluid" src="/images/about-bakery-image-3.jpg" alt="bakery"/>
            </div>
          </div>
        </div>
       </div>
     </div>
     <div className="bakery-video-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="video-inner text-center">
              <h3>Real Taste</h3>
              <p className="text-white">A light, sour wheat dough with roasted walnuts and freshly picked rosemary, thyme, poppy seeds, parsley and sage</p>
              <div className="media d-flex justify-content-center align-items-center flex-column">
                 <div className="media-inner d-flex">
                    <a className="pop-up" href="https://youtu.be/NwablZyXObc"><CgPlayButtonO/></a>
                    
                 </div>
                 <div className="media-body">
                      <h5 className="text-white">Watch intro video</h5>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
     <div className="our-mission p-100">
      <div className="container">
         <div className="row">
           <div className="col-lg-4">
              <div className="mission-title">
                <h2 className="position-relative">Our Mission</h2>
                <div><img className="img-fluid" src="/images/about.jpg" alt="aboutus"/></div>
              </div>
           </div>
           <div className="col-lg-8">
             <div className="mission-inner-text">
              <h6><i>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan-tium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</i></h6>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu</p>
              <h5><i>Our Speciality</i></h5>
              <ul className="speciality d-flex">
                <li><a href="#">Custom Cakes</a></li>
                <li><a href="#">Birthday Cakes</a></li>
                <li><a href="#">Wedding Cakes</a></li>
                <li><a href="#">European Delicacies</a></li>
              </ul>
             </div>
           </div>
         </div>
      </div>  
     </div>
     <div className="our-chefs pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-12">
          <div className="mission-title our-chef-text">
                <h2 className="position-relative">Our Chefs</h2>
                 <p>Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion.</p>
              </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
             <div className="chef-detail text-center">
               <div><img className="img-fluid" src="/images/chef-1.jpg" alt="chef"/></div>
               <a href="#"><h4>Clara Jones</h4></a>
               <h5>Expert in Cake Making</h5>
             </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
          <div className="chef-detail text-center">
               <div><img className="img-fluid" src="/images/chef-2.jpg" alt="chef"/></div>
               <a href="#"><h4>Brook William</h4></a>
               <h5>Expert in Cake Making</h5>
             </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
          <div className="chef-detail text-center">
               <div><img className="img-fluid" src="/images/chef-3.jpg" alt="chef"/></div>
               <a href="#"><h4>Nick Powell</h4></a>
               <h5>Expert in Cake Making</h5>
             </div>
          </div>
        </div>
      </div>
     </div>
   </>
  )
}
