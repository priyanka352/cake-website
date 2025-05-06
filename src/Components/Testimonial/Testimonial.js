import React from "react";
import "./TestimonialStyle.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
//Owl Carousel Settings
const options = {
  margin: 30,
  responsiveClass: true,
  nav: false,
  autoplay: true,
  dots:true,

  smartSpeed: 1000,
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
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
};

export default function Testimonial() {
  return (
    <div>
      {/* <h2 className="mb-2">Our Guestbook</h2> */}
      <OwlCarousel className="slider-items owl-carousel" {...options}>
        <div className="item">
          <div className="testimonial-panel position-relative bg-white text-center">
                <div className="testimonial-body">
                    <p>“ We've been to Cakecious many times over the years. We know what to expect: great food and awesome prices ”</p>
                </div>
                <div className="testimonial-info position-relative">
                    <div className="testimonial-image position-relative">
                        <img className="" src="/images/test-1.png" alt="client" />
                    </div>
                    <div className="testimonial-author">
                        <h4><i>- David Casper</i></h4>
                    </div>
                </div>
          </div>
        </div>
        <div className="item">
          <div className="testimonial-panel position-relative bg-white text-center">
                <div className="testimonial-body">
                    <p>“ We've been to Cakecious many times over the years. We know what to expect: great food and awesome prices ”</p>
                </div>
                <div className="testimonial-info position-relative">
                    <div className="testimonial-image position-relative">
                        <img className="" src="/images/test-2.png" alt="client" />
                    </div>
                    <div className="testimonial-author">
                        <h4><i>- Todd Stephen</i></h4>
                    </div>
                </div>
          </div>
        </div>
        <div className="item">
          <div className="testimonial-panel position-relative bg-white text-center">
                <div className="testimonial-body">
                    <p>“ We've been to Cakecious many times over the years. We know what to expect: great food and awesome prices ”</p>
                </div>
                <div className="testimonial-info position-relative">
                    <div className="testimonial-image position-relative">
                        <img className="" src="/images/test-3.png" alt="client" />
                    </div>
                    <div className="testimonial-author">
                        <h4><i>- John Arax</i></h4>
                    </div>
                </div>
          </div>
        </div>
        <div className="item">
          <div className="testimonial-panel position-relative bg-white text-center">
                <div className="testimonial-body">
                    <p>“ We've been to Cakecious many times over the years. We know what to expect: great food and awesome prices ”</p>
                </div>
                <div className="testimonial-info position-relative">
                    <div className="testimonial-image position-relative">
                        <img className="" src="/images/test-1.png" alt="client" />
                    </div>
                    <div className="testimonial-author">
                        <h4><i>- David Casper</i></h4>
                    </div>
                </div>
          </div>
        </div>
        <div className="item">
          <div className="testimonial-panel position-relative bg-white text-center">
                <div className="testimonial-body">
                    <p>“ We've been to Cakecious many times over the years. We know what to expect: great food and awesome prices ”</p>
                </div>
                <div className="testimonial-info position-relative">
                    <div className="testimonial-image position-relative">
                        <img className="" src="/images/test-2.png" alt="client" />
                    </div>
                    <div className="testimonial-author">
                        <h4><i>- Todd Stephen</i></h4>
                    </div>
                </div>
          </div>
        </div>
        <div className="item">
          <div className="testimonial-panel position-relative bg-white text-center">
                <div className="testimonial-body">
                    <p>“ We've been to Cakecious many times over the years. We know what to expect: great food and awesome prices ”</p>
                </div>
                <div className="testimonial-info position-relative">
                    <div className="testimonial-image position-relative">
                        <img className="" src="/images/test-3.png" alt="client" />
                    </div>
                    <div className="testimonial-author">
                        <h4><i>- John Arax</i></h4>
                    </div>
                </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}
