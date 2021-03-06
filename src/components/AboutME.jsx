import React, { useEffect, useRef } from 'react'
import IMG1 from '../assets/img/bootstrap.png'
import IMG3 from '../assets/img/css.png'
import IMG4 from '../assets/img/html.png'
import IMG5 from '../assets/img/js.png'
import IMG6 from '../assets/img/node.png'
import IMG7 from '../assets/img/php.png'
import IMG8 from '../assets/img/sass.png'
import IMG9 from '../assets/img/react-1-282599.png'
import IMG10 from '../assets/img/mysql.png'
import gsap, { Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function AboutME() {
    const AbSec = useRef(undefined)

    useEffect(() => {

        const fadeUp = gsap.timeline({
            scrollTrigger: {
                trigger: AbSec.current,
                start: 'top bottom-=30%',

            }
        })

        fadeUp.from(AbSec.current, .5, {
            opacity: 0,
            y: 50,
            ease: Linear.easeInOut,
            filter: "blur(3px)",



        }).from('.sec3Content h1', .5, {
            opacity: 0,
            ease: Linear.easeInOut,
            scaleY: 0,


        }).from('.sec3Content p', .3, {
            opacity: 0,
            ease: Linear.easeInOut,
            scaleY: 0,


        }).from('.sec3Content ul h4', .5, {
            ease: Linear.easeInOut,
            autoAlpha: 0,
            stagger: .2,


        }).from('.sec3Content ul li', {
            ease: Linear.easeInOut,
            y: 20,
            scale: .90,
            x: -23,
            autoAlpha: 0,
            duration: .5,
            stagger: {
                amount: 1,
                from: "end",
                grid: 'auto',

            }

        })

    }, [])



    return (
        <>

            <div id="section--3">
                <div className="container section ">
                    <div className="aboutSection" ref={AbSec}>
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-6 sec3Content">
                                <h1>About Me</h1>
                                <p> my name is ahmed soran majeed from kurdistan 23Y old and iam full stack developer </p>

                                <ul>
                                    <h4>I have a good experience
                                        with</h4>
                                    <li>
                                        javascript
                                    </li>

                                    <li>
                                        node js
                                    </li>
                                    <li>
                                        html
                                    </li>
                                    <li>
                                        css
                                    </li>
                                    <li>
                                        scss
                                    </li>
                                    <li>
                                        bootstrap
                                    </li>
                                    <li>react js</li>
                                    <li>express js</li>
                                    <li>JSON Web Tokens</li>
                                    <li>JOI Validation</li>
                                    <li>mongoDB</li>
                                    <li>react native</li>
                                    <h4>others with basics experience</h4>
                                    <li>php</li>
                                    <li>mysql</li>
                                </ul>


                                <button className="customBTN1" onClick={() => window.open("https://drive.google.com/file/d/1MbtU0N9JSkz7Nb7qAjxMgXuamUUMTUM8/view?usp=sharing", "_blank")}>view CV</button>


                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 mg" >
                                <div className="devimg" >
                                    <img src={IMG1} alt="img" />
                                    <img src={IMG3} alt="img" />
                                    <img src={IMG4} alt="img" />
                                    <img src={IMG5} alt="img" />
                                    <img src={IMG6} alt="img" />
                                    <img src={IMG7} alt="img" />
                                    <img src={IMG8} alt="img" />
                                    <img src={IMG9} alt="img" />
                                    <img src={IMG10} alt="img" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
