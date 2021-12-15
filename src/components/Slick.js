import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import img_banner1 from "./images/banner-home-page-1.png"
import img_banner2 from "./images/img-banner-home-2-03-02.png"
import img_banner3 from "./images/images-banner-home-1.png"

import "./slick.css"

const Slick = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          <div className="img-main_1">
            <img src={img_banner1} alt="" />
          </div>
          <div className="img-main_2">
          <img src={img_banner2} alt="" />
          </div>
          <div className="img-main_3">
          <img src={img_banner3} alt="" />
          </div>
        </Slider>
      );
}

export default Slick;
