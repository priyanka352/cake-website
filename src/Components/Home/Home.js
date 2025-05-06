import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Timer from "../Timer/Timer";
import FeaturedCakes from "../FeaturedCakes/FeaturedCakes";
import Testimonial from "../Testimonial/Testimonial";
import { Link } from "react-router-dom";
import "./HomeStyle.css";
import { reset_redirectTo } from "../../Redux/loginSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {
  const { redirectTo } = useSelector((state) => state.logContent);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reset_redirectTo(null));
  }, [redirectTo]);
  return (
    <React.Fragment>
      <Banner />
      {/* <ToastContainer /> */}
      <div className="about position-relative my-2">
        <div className="container">
          <h2 className="head-title text-center my-4 py-4">About Us</h2>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about-wrapper">
                <div className="main-title">
                  <h3 className="fw-bold">Welcome To Our Bakery</h3>
                  <p className="mb-0">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur uis autem vel eum.
                  </p>
                </div>
                <div className="main-sub-title">
                  <p>
                    Nor again is there anyone who loves or pursues or desires to
                    obtain pain of itself, because it is pain, but because
                    occasionally circumstances occur in which toil and pain can
                    procure him some great pleasure. To take a trivial example,
                    which of us ever undertakes laborious physical exercise.
                  </p>
                  <div className="sub-button">
                    <button type="button" className="btn btn-abt">
                      Know more about us
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="abt-image-wrapper"><img className="img-fluid" src="/images/about.jpg" alt="demo" /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hot-deal my-2">
        <div className="container">
          <h2 className="head-title text-center my-4 py-4">Today's Hot Deal</h2>

          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="abt-image-wrapper"> <img
                className="img-fluid"
                src="/images/hot-deal.png"
                alt="cake"
              /></div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about-wrapper"> 
                <div className="main-title">
                  <h3 className="fw-bold">Grab the offer now</h3>
                  <p>
                    Hurry up! The offer is for limited period. It will end on 31st
                    of January
                  </p>
                  <p>
                    Offer Price is <del>$30.00</del>{" "}
                    <ins className="offer_price">$18.00</ins>
                  </p>
                  <Timer />
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
      <div className="feature-cake position-relative my-2">
        <div className="container">
          <h2 className="head-title text-center my-4 py-4">Top Products</h2>
          <div className="row">
            <div className="col-lg-10">
              <div className="main-title">
                <h3 className="fw-bold">Our Featured Cakes</h3>
                <p>
                  Hurry up! Order any of our featured cakes. <br />
                  Get a discount on your first order.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <FeaturedCakes />
            </div>
          </div>
        </div>
      </div>
      <div className="our-menu my-2">
        <div className="container">
          <h2 className="head-title text-center my-4 py-4">Our Varieties</h2>
          <div className="row">
            <div className="col-lg-10">
              <div className="main-title">
                <h3 className="fw-bold">Our Varieties</h3>
                <p>
                  Hurry up! Order any of our hot selling or new variety cakes.{" "}
                  <br />
                  Get a discount on your first order.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="row justify-content-center align-items-center">
                <div className="col-md-4">
                  <h3 className="text-uppercase menu-title">hot sell</h3>
                </div>
                <div className="col-md-8">
                  <div className="progress my-2 newprogress">
                    <div
                      className="progress-bar progress-bar-striped prog-bg"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="col-md-4">
                  <img className="img-fluid" src="/images/f1.jpg" alt="food" />
                </div>
                <div className="col-md-8">
                  <div className="my-2 variety_desc">
                    <h5>
                      Try our new vanilla scooped waffle. It is finger-licking &
                      we are also providing a discount on it.
                    </h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <img className="img-fluid" src="/images/f2.jpg" alt="food" />
                </div>
                <div className="col-md-8">
                  <div className="my-2 variety_desc">
                    <h5>
                      Still now didn't tried our wraps? Why wait for it when you
                      can get it at a discount of 5%.
                    </h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <img className="img-fluid" src="/images/f3.jpg" alt="food" />
                </div>
                <div className="col-md-8">
                  <div className="my-2 variety_desc">
                    <h5>
                      Try our amazing cupcakes.We are offering different
                      flavours on it.Vanilla Chocochip Cupcake is selling hot.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="row justify-content-center align-items-center">
                <div className="col-md-4">
                  <h3 className="text-uppercase menu-title">new sell</h3>
                </div>
                <div className="col-md-8">
                  <div className="progress my-2 newprogress">
                    <div
                      className="progress-bar progress-bar-striped prog-bg"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="col-md-4">
                  <img className="img-fluid" src="/images/f4.jpg" alt="food" />
                </div>
                <div className="col-md-8">
                  <div className="my-2 variety_desc">
                    <h5>
                      Try our new strawberry doughnut. It is finger-licking & we
                      are also providing a discount on it.
                    </h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <img className="img-fluid" src="/images/f5.jpg" alt="food" />
                </div>
                <div className="col-md-8">
                  <div className="my-2 variety_desc">
                    <h5>
                      Still now didn't tried our baked waffle? Why wait for it
                      when you can get it at a discount of 5%.
                    </h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <img className="img-fluid" src="/images/f6.jpg" alt="food" />
                </div>
                <div className="col-md-8">
                  <div className="my-2 variety_desc">
                    <h5>
                      Try our amazing veg wraps.We are offering different
                      flavours on it.Strawberry Wraps are selling hot.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog position-relative my-2">
        <div className="container">
          <h2 className="head-title text-center my-4 py-4">Check Our Blogs</h2>
          <div className="row">
            <div className="col-lg-10">
              <div className="main-title">
                <h3 className="fw-bold">Our Latest Blogs</h3>
                <p>
                  Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec
                  odios Suspe ndisse cursus mal suada faci lisis.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="blog-card m-2">
                <div className="blog-image">
                  <img
                    className="img-fluid"
                    src="images/blog-1.jpg"
                    alt="demo"
                  />
                </div>
                <div className="blog-details bg-white">
                  <h4>Oct 15, 2022</h4>
                  <h5>Nanotechnology immersion along the information</h5>
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum vel diam lorem. Quisque luctus consequat risus,
                    et finibus libero maximus in. Mauris rhoncus odio id dolor
                    rhoncus, at sagittis ligula iaculis.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-card m-2">
                <div className="blog-image">
                  <img
                    className="img-fluid"
                    src="images/blog-2.jpg"
                    alt="demo"
                  />
                </div>
                <div className="blog-details bg-white">
                  <h4>Dec 18, 2022</h4>
                  <h5>Nanotechnology immersion along the information</h5>
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum vel diam lorem. Quisque luctus consequat risus,
                    et finibus libero maximus in. Mauris rhoncus odio id dolor
                    rhoncus, at sagittis ligula iaculis.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-card m-2">
                <div className="blog-image">
                  <img
                    className="img-fluid"
                    src="images/blog-3.jpg"
                    alt="demo"
                  />
                </div>
                <div className="blog-details bg-white">
                  <h4>Jan 10, 2023</h4>
                  <h5>Nanotechnology immersion along the information</h5>
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum vel diam lorem. Quisque luctus consequat risus,
                    et finibus libero maximus in. Mauris rhoncus odio id dolor
                    rhoncus, at sagittis ligula iaculis.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center my-3 py-3">
            <Link to={`/seeBlog/1`}>
              <button className="BlogBtn">View More Blogs</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="testimonial position-relative mt-2">
        <div className="container">
          <h2 className="head-title text-center my-4 py-4">Testimonial</h2>

          <div className="row">
            <div className="col-lg-10">
              <div className="main-title">
                <h3 className="fw-bold">People Talk</h3>
                <p>
                  Check out what our clients says <br />
                  We have 1500+ satisfied customers.
                </p>
              </div>
            </div>
          </div>
          <Testimonial />
        </div>
      </div>
    </React.Fragment>
  );
}
