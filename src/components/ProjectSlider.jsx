import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Posts from './posts';
import { useGetProjectQuery } from '../app/portfolioAPI';
import { ShimmerPostItem } from "react-shimmer-effects";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function ProjectSlider() {
    const slider = React.useRef(null);
    const sectin4 = React.useRef(null);
    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: sectin4.current,
                start: 'center center',
                end: 'center center',
                onEnter: () => {
                    // set attribute for #section--1 id 
                    document.querySelector('#section--1').setAttribute('data-section', 'project')


                },
                onEnterBack: () => {
                    document.querySelector('#section--1').setAttribute('data-section', 'project')


                }


            }

        })

    }, [])



    const { data, isFetching } = useGetProjectQuery()

    const setting = {
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        arrows: false,
        infinite: true,
        lazyLoad: true,
        swipeToSlide: true,

        responsive: [

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                }
            },


        ]

    }

    if (isFetching) {

        return <ShimmerPostItem card title text cta />


    }

    return (
        <>
            <div id="section--4" ref={sectin4}>
                <div className="container section animation">
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
                                {

                                }
                                {data?.map((detail, i) => {

                                    return <Posts key={i} ImgSrc={detail.image} alt={detail.description} title={detail.headerText} des={detail.description} url={detail.projectUrl} />
                                })}

                            </Slider>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

