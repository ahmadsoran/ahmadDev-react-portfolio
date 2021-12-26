import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Posts from './posts';
import img1 from '../assets/img/me.png'

export default function ProjectSlider() {
    const slider = React.useRef(null);


    const setting = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        arrows: false,
        infinite: true,
        lazyLoad: true,
        lazyLoad: true,
        swipeToSlide: true,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 250,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 100,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }
    return (
        <>
            <div id="section--4">
                <div className="container section">
                    <div className="portSection">
                        <div className="portSectionH">
                            <h1>projects</h1>
                            <div className="portBtn">
                                <button className="prev" onClick={() => slider?.current?.slickPrev()}> <i className="fas fa-arrow-left"></i> </button>
                                <button className="next " onClick={() => slider?.current?.slickNext()}><i className="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                        <div className="sliderContainer">

                            <Slider ref={slider} {...setting}>
                                <Posts ImgSrc={img1} title='ahmad soran' des='afsdgjbhbfnfwknfwsenfwsfeknwkjefnkwjefnwjefnkwjejnfkwejfnsjefensjefnsjeefnjenfjenfjefnef' />
                                <Posts ImgSrc={img1} title='ahmad soran' des='afsdgjbhbfnfwknfwsenfwsfeknwkjefnkwjefnwjefnkwjejnfkwejfnsjefensjefnsjeefnjenfjenfjefnef' />
                                <Posts ImgSrc={img1} title='ahmad soran' des='afsdgjbhbfnfwknfwsenfwsfeknwkjefnkwjefnwjefnkwjejnfkwejfnsjefensjefnsjeefnjenfjenfjefnef' />
                                <Posts ImgSrc={img1} title='ahmad soran' des='afsdgjbhbfnfwknfwsenfwsfeknwkjefnkwjefnwjefnkwjejnfkwejfnsjefensjefnsjeefnjenfjenfjefnef' />
                                <Posts ImgSrc={img1} title='ahmad soran' des='afsdgjbhbfnfwknfwsenfwsfeknwkjefnkwjefnwjefnkwjejnfkwejfnsjefensjefnsjeefnjenfjenfjefnef' />
                                <Posts ImgSrc={img1} title='ahmad soran' des='afsdgjbhbfnfwknfwsenfwsfeknwkjefnkwjefnwjefnkwjejnfkwejfnsjefensjefnsjeefnjenfjenfjefnef' />
                                <Posts ImgSrc={img1} title='ahmad soran' des='afsdgjbhbfnfwknfwsenfwsfeknwkjefnkwjefnwjefnkwjejnfkwejfnsjefensjefnsjeefnjenfjenfjefnef' />
                                <Posts ImgSrc={img1} title='ahmad soran' des='afsdgjbhbfnfwknfwsenfwsfeknwkjefnkwjefnwjefnkwjejnfkwejfnsjefensjefnsjeefnjenfjenfjefnef' />
                                <Posts ImgSrc={img1} title='ahmad soran' des='afsdgjbhbfnfwknfwsenfwsfeknwkjefnkwjefnwjefnkwjejnfkwejfnsjefensjefnsjeefnjenfjenfjefnef' />

                            </Slider>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
function slickNext() {
    throw new Error('Function not implemented.');
}

