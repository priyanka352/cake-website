import React from "react";
import "./FeatureCakeStyle.css";
//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//Owl Carousel Settings
const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  //navText: ["Prev", "Next"],
  smartSpeed: 500,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
};
export default function FeaturedCakes() {
  return (
    <div>
      
      <OwlCarousel className="slider-items owl-carousel" {...options}>
        <div className="item">
          <div className="cake-feature-item"> 
            <div className="cake-image position-relative">
                <img className="img-fluid" src="/images/feature-1.jpg" alt="cake" />
                <div className="cake-image-overlay position-absolute"></div>
            </div>
            <div className="cake_text">
       			<h4>59Only</h4>
       			<h3>Kiwi Cupcake</h3>
       			{/* <button className="btn btn-feature-cake">Add to cart</button> */}
       		</div>
          </div>
          
        </div>
        <div className="item">
          <div className="cake-feature-item"> 
            <div className="cake-image position-relative">
                <img className="img-fluid" src="/images/feature-2.jpg" alt="cake" />
                <div className="cake-image-overlay position-absolute"></div>
            </div>
            <div className="cake_text">
       			<h4>42Only</h4>
       			<h3>Chocolate Fudge</h3>
       			{/* <button className="btn btn-feature-cake">Add to cart</button> */}
       		</div>
          </div>
          
        </div>
        <div className="item">
          <div className="cake-feature-item"> 
            <div className="cake-image position-relative">
                <img className="img-fluid" src="/images/feature-3.jpg" alt="cake" />
                <div className="cake-image-overlay position-absolute"></div>
            </div>
            <div className="cake_text">
       			<h4>35Only</h4>
       			<h3>Redvelvet CupCake</h3>
       			{/* <button className="btn btn-feature-cake">Add to cart</button> */}
       		</div>
          </div>
          
        </div>
        <div className="item">
          <div className="cake-feature-item"> 
            <div className="cake-image position-relative">
                <img className="img-fluid" src="/images/feature-4.jpg" alt="cake" />
                <div className="cake-image-overlay position-absolute"></div>
            </div>
            <div className="cake_text">
       			<h4>55Only</h4>
       			<h3>Vanilla Brownie</h3>
       			{/* <button className="btn btn-feature-cake">Add to cart</button> */}
       		</div>
          </div>
          
        </div>
       
        <div className="item">
          <div className="cake-feature-item"> 
            <div className="cake-image position-relative">
                <img className="img-fluid" src="/images/feature-2.jpg" alt="cake" />
                <div className="cake-image-overlay position-absolute"></div>
            </div>
            <div className="cake_text">
       			<h4>42Only</h4>
       			<h3>Chocolate Fudge</h3>
       			{/* <button className="btn btn-feature-cake">Add to cart</button> */}
       		</div>
          </div>
          
        </div>
        <div className="item">
          <div className="cake-feature-item"> 
            <div className="cake-image position-relative">
                <img className="img-fluid" src="/images/feature-4.jpg" alt="cake" />
                <div className="cake-image-overlay position-absolute"></div>
            </div>
            <div className="cake_text">
       			<h4>55Only</h4>
       			<h3>Vanilla Brownie</h3>
       			{/* <button className="btn btn-feature-cake">Add to cart</button> */}
       		</div>
          </div>
          
        </div>
        <div className="item">
          <div className="cake-feature-item"> 
            <div className="cake-image position-relative">
                <img className="img-fluid" src="/images/feature-3.jpg" alt="cake" />
                <div className="cake-image-overlay position-absolute"></div>
            </div>
            <div className="cake_text">
       			<h4>35Only</h4>
       			<h3>Redvelvet CupCake</h3>
       			{/* <button className="btn btn-feature-cake">Add to cart</button> */}
       		</div>
          </div>
          
        </div>
        <div className="item">
          <div className="cake-feature-item"> 
            <div className="cake-image position-relative">
                <img className="img-fluid" src="/images/feature-1.jpg" alt="cake" />
                <div className="cake-image-overlay position-absolute"></div>
            </div>
            <div className="cake_text position-relative">
       			<h4>49Only</h4>
       			<h3>Kiwi Cupcake</h3>
       			{/* <button className="btn btn-feature-cake">Add to cart</button> */}
       		</div>
          </div>
          
        </div>
      </OwlCarousel>
    </div>
  );
}
