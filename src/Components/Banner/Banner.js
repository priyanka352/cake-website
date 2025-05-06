import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./BannerStyle.css";


export default function Banner() {
  return (
    <div className="banner position-relative"> 
      <div className="container-fluid"> 
        <Carousel>
          <Carousel.Item>
           <div className="banner__slider__1"></div>
            <Carousel.Caption>
              <div className="banner_mask_wrap position-absolute">
                <div className="banner__header">
                  <h3>Quality Cake ... <br/>  with sweet, eggs & breads</h3>
                </div>
                <div className="banner__description">
                   <p>Nemo enim ipsam voluptatem quia voluptas <br/> sit aspernatur aut odit aut fugit <br/> quia consequuntur magni dolores eos<br/> qui ratione
                  </p>
                </div>
                <div className="banner__button justify-content-start d-flex">
                  <button type="button" className="btn btn-banner">Purchase Now</button>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="banner__slider__2"></div>

            <Carousel.Caption>
            <div className="banner_mask_wrap position-absolute">
                <div className="banner__header">
                  <h3>Cake Bakery ...<br/>  make delicious products</h3>
                </div>
                <div className="banner__description">
                   <p>Nemo enim ipsam voluptatem quia voluptas <br/> sit aspernatur aut odit aut fugit <br/> quia consequuntur magni dolores eos<br/> qui ratione
                  </p>
                </div>
                <div className="banner__button justify-content-start d-flex">
                  <button type="button" className="btn btn-banner">Purchase Now</button>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
           
              <div className="banner__slider__3"></div>
            <Carousel.Caption>
            <div className="banner_mask_wrap position-absolute">
                <div className="banner__header">
                  <h3>Cake theme ...  <br/>   made with care and love</h3>
                </div>
                <div className="banner__description">
                   <p>Nemo enim ipsam voluptatem quia voluptas <br/> sit aspernatur aut odit aut fugit <br/> quia consequuntur magni dolores eos<br/> qui ratione
                  </p>
                </div>
                <div className="banner__button justify-content-start d-flex">
                  <button type="button" className="btn btn-banner">Purchase Now</button>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

