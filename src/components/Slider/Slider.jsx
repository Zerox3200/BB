import React from "react";
import Slider from "react-slick";
import './Slider.scss'
// import app from '../../Assets/Images/people-holding-pinterest-icon.jpg'


function CenterMode() {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1433,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 783,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    autoplay: true
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            <Slider {...settings} >
                <div>
                    <img alt="..." loading="lazy" />
                </div>
                <div>
                    <img alt="..." loading="lazy" />
                </div>
                <div>
                    <img alt="..." loading="lazy" />
                </div>
                <div>
                    <img alt="..." loading="lazy" />
                </div>
                <div>
                    <img alt="..." loading="lazy" />
                </div>
                <div>
                    <img alt="..." loading="lazy" />
                </div>
                <div>
                    <img alt="..." loading="lazy" />
                </div>
                <div>
                    <img alt="..." loading="lazy" />
                </div>
            </Slider>
        </div>
    );
}

export default CenterMode;

