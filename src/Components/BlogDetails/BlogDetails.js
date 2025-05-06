import React from 'react';
import { useParams } from 'react-router-dom';
import "./BlogDetStyle.css";

export default function Blog() {
  const params=useParams();
  return (
    <>
    {params.id == 1 ? (
       <div className="blogdetailsblock">
            <div className="container">
                <div className="row my-2 py-4">
                <div className="col-lg-6">
                <div className="blog-card m-2">
                    <div className="blog-image">
                        <img className="img-fluid" src="/images/blog-1.jpg" alt="demo" />
                    </div>
                    <div className="blog-details">
                        <h4>Oct 15, 2022</h4>
                        <h5>Nanotechnology immersion along the information</h5>
                        <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum vel diam lorem. Quisque luctus consequat risus, et
                        finibus libero maximus in. Mauris rhoncus odio id dolor
                        rhoncus, at sagittis ligula iaculis. 
                        </h6>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="blog-card m-2">
                    <div className="blog-image">
                        <img className="img-fluid" src="/images/blog-4.jpg" alt="demo" />
                    </div>
                    <div className="blog-details">
                        <h4>Oct 15, 2022</h4>
                        <h5>Nanotechnology immersion along the information</h5>
                        <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum vel diam lorem. Quisque luctus consequat risus, et
                        finibus libero maximus in. Mauris rhoncus odio id dolor
                        rhoncus, at sagittis ligula iaculis. 
                        </h6>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="blog-card m-2">
                    <div className="blog-image">
                        <img className="img-fluid" src="/images/blog-2.jpg" alt="demo" />
                    </div>
                    <div className="blog-details">
                        <h4>Oct 15, 2022</h4>
                        <h5>Nanotechnology immersion along the information</h5>
                        <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum vel diam lorem. Quisque luctus consequat risus, et
                        finibus libero maximus in. Mauris rhoncus odio id dolor
                        rhoncus, at sagittis ligula iaculis. 
                        </h6>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="blog-card m-2">
                    <div className="blog-image">
                        <img className="img-fluid" src="/images/blog-5.jpg" alt="demo" />
                    </div>
                    <div className="blog-details">
                        <h4>Oct 15, 2022</h4>
                        <h5>Nanotechnology immersion along the information</h5>
                        <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum vel diam lorem. Quisque luctus consequat risus, et
                        finibus libero maximus in. Mauris rhoncus odio id dolor
                        rhoncus, at sagittis ligula iaculis. 
                        </h6>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="blog-card m-2">
                    <div className="blog-image">
                        <img className="img-fluid" src="/images/blog-3.jpg" alt="demo" />
                    </div>
                    <div className="blog-details">
                        <h4>Oct 15, 2022</h4>
                        <h5>Nanotechnology immersion along the information</h5>
                        <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum vel diam lorem. Quisque luctus consequat risus, et
                        finibus libero maximus in. Mauris rhoncus odio id dolor
                        rhoncus, at sagittis ligula iaculis. 
                        </h6>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="blog-card m-2">
                    <div className="blog-image">
                        <img className="img-fluid" src="/images/blog-6.jpg" alt="demo" />
                    </div>
                    <div className="blog-details">
                        <h4>Oct 15, 2022</h4>
                        <h5>Nanotechnology immersion along the information</h5>
                        <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum vel diam lorem. Quisque luctus consequat risus, et
                        finibus libero maximus in. Mauris rhoncus odio id dolor
                        rhoncus, at sagittis ligula iaculis. 
                        </h6>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="blog-card m-2">
                    <div className="blog-image">
                        <img className="img-fluid" src="/images/blog-7.jpg" alt="demo" />
                    </div>
                    <div className="blog-details">
                        <h4>Oct 15, 2022</h4>
                        <h5>Nanotechnology immersion along the information</h5>
                        <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum vel diam lorem. Quisque luctus consequat risus, et
                        finibus libero maximus in. Mauris rhoncus odio id dolor
                        rhoncus, at sagittis ligula iaculis. 
                        </h6>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="blog-card m-2">
                    <div className="blog-image">
                        <img className="img-fluid" src="/images/blog-8.jpg" alt="demo" />
                    </div>
                    <div className="blog-details">
                        <h4>Oct 15, 2022</h4>
                        <h5>Nanotechnology immersion along the information</h5>
                        <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum vel diam lorem. Quisque luctus consequat risus, et
                        finibus libero maximus in. Mauris rhoncus odio id dolor
                        rhoncus, at sagittis ligula iaculis. 
                        </h6>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div> 
    ) : null}
    </>
  )
}
