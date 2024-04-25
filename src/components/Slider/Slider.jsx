import React from "react";

import Slider from "react-slick";
import './Slider.scss'
import app from '../../Assets/Images/people-holding-pinterest-icon.jpg'


function CenterMode() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "1px",
        slidesToShow: 4.03,
        speed: 500,
        rtl:true,
        // responsive: [
        //     {

        //     }
        // ]
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src={app} alt="" />
                </div>
                <div>
                    <img src={app} alt="" />
                </div>
                <div>
                    <img src={app} alt="" />
                </div>
                <div>
                    <img src={app} alt="" />
                </div>
                <div>
                    <img src={app} alt="" />
                </div>
                <div>
                    <img src={app} alt="" />
                </div>
                <div>
                    <img src={app} alt="" />
                </div>
                <div>
                    <img src={app} alt="" />
                </div>
                <div>
                    <img src={app} alt="" />
                </div>
                <div>
                    <img src={app} alt="" />
                </div>

            </Slider>
        </div>
    );
}

export default CenterMode;

