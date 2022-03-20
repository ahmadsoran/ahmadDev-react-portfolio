import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetLikesQuery, useSendLikesMutation } from '../app/portfolioAPI'
import img1 from '../assets/img/earth.png'
import { setDidLike, setLikes } from '../featrues/likeSlice';
import gsap, { TweenMax, Power4 } from 'gsap'
export default function Header() {

    const [addLike] = useSendLikesMutation();
    const { data, refetch } = useGetLikesQuery();
    const [hitlike, setHitlike] = useState(false);
    const dispatch = useDispatch()


    const addLikeHandler = async () => {
        dispatch(setDidLike())
        await addLike({ like: 'liked' })
        setHitlike(true)
        refetch();

    }
    const addDisLikeHandler = async () => {
        dispatch(setDidLike())
        await addLike({ like: 'liked' })
        setHitlike(true)
        refetch();
        alert('lol')

    }
    data?.map((datas) => {
        return dispatch(setLikes(datas.like.length))
    })
    const { likeNumber } = useSelector((state) => state.likeSlice)
    const { didLiked } = useSelector((state) => state.likeSlice)
    useEffect(() => {

        if (didLiked === 'liked') {

            setHitlike(true)
        }

    }, [didLiked]);
    const headerTextOne = useRef(undefined)
    const headerTextTwo = useRef(undefined)
    const headerTextThree = useRef(undefined)
    const fbIcon = useRef(undefined)

    useEffect(() => {
        TweenMax.from('.myText h1 , .myText h4', 1, {
            y: 20,
            ease: Power4.easeInOut,
            scale: 0.1,
            stagger: .3,
            autoAlpha: 0,
        })

        // tweenmax on scrollTrigger
        TweenMax.from('.myImage', 2, {
            opacity: 0,
            ease: Power4.easeInOut,
            delay: .3,
            scale: .2
        })
        TweenMax.from('.portLike * , .portLike', 1, {
            opacity: 0,
            ease: Power4.easeInOut,
            delay: .7,
            scaleY: 0.4,
            stagger: .2
        })
        TweenMax.from('.socialBtn i', .7, {
            opacity: 0,
            ease: Power4.easeInOut,
            delay: .3,
            y: -100,
            scale: 0,
            stagger: {
                amount: .6,
                from: "end",
            }
        })


        gsap.timeline({
            scrollTrigger: {
                trigger: '#section--2',
                start: 'bottom top+=20%',
                end: 'bottom-=10% top+=40%',

                onEnter: () => {
                    gsap.fromTo('#section--1', 2, {
                        y: -100,
                        autoAlpha: 0, ease: Power4.easeInOut,
                        scaleY: 0.5
                    }, {
                        y: 0,
                        ease: Power4.easeInOut,
                        position: 'fixed',
                        boxShadow: '0px 5px 10px rgba(0,0,0,1)',
                        borderBottomLeftRadius: '1vw',
                        borderBottomRightRadius: '1vw',
                        scaleY: 1,
                        autoAlpha: 1,

                        attr: {
                            'data-section': 'about'
                        }

                    })
                },
                onEnterBack: () => {
                    gsap.to('#section--1', 2, {
                        position: 'relative',
                        delay: .5,
                        boxShadow: 'none',
                        borderBottomLeftRadius: '0',
                        borderBottomRightRadius: '0',

                        attr: {
                            'data-section': 'about'
                        }


                    })
                }



            }
        })




    }, [])

    return (

        <>
            <main>
                <div id="section--2">
                    <div className="container ">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-6 s2">
                                <div className="myText">
                                    <h4 ref={headerTextOne}>hey, iam</h4>
                                    <h1 ref={headerTextTwo}>ahmed soran majeed</h1>
                                    <h4 ref={headerTextThree}>from <span>kurdistan</span> iraq , developing websites & apps</h4>
                                </div>
                                <div className="socialBtn">
                                    <i onClick={() => window.open("https://twitter.com/ahmadsorannn", "_blank")} className="fab fa-twitter"></i>
                                    <i onClick={() => window.open("https://github.com/ahmadsoran", "_blank")} className="fab fab fa-github"></i>
                                    <i ref={fbIcon} onClick={() => window.open("https://www.facebook.com/ahmasoran", "_blank")} className="fab fa-facebook"></i>
                                </div>
                                <div className="portLike">
                                    <h1>did you like my portfolio?</h1>
                                    {

                                    }
                                    {!hitlike ? <>
                                        <div className="like-dislike-btn">
                                            <i className="far fa-thumbs-up" onClick={addLikeHandler}> yes</i> <i className="far fa-thumbs-down" onClick={addDisLikeHandler}> no</i>
                                        </div>
                                        <p>liked by  {likeNumber}</p>
                                    </>
                                        : <><h1>thankyou</h1><p>you and  {likeNumber} others liked</p> </>

                                    }
                                </div>

                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 s2">
                                <div className="myImage">
                                    <img src={img1} alt="ahmed soran" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >

        </>
    )
}

