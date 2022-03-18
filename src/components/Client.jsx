import React, { useEffect, useState } from 'react'
import img1 from '../assets/img/cli1.png'
import img2 from '../assets/img/cli2.jpg'
import img3 from '../assets/img/cli3.jpg'
import img4 from '../assets/img/cli4.jpg'
import img5 from '../assets/img/cli5.jpg'
import img6 from '../assets/img/awab.jpg'
import img7 from '../assets/img/map.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function Client() {
    const [img1Active, setimg1Active] = useState(true)
    const [img2Active, setimg2Active] = useState(false)
    const [img3Active, setimg3Active] = useState(false)
    const [img4Active, setimg4Active] = useState(false)
    const [img5Active, setimg5Active] = useState(false)
    const [img6Active, setimg6Active] = useState(false)
    const img1Comment = `SARA: 've been an online marketer since 2004 and I've worked with a lot of programmers over the years. If you're looking for someone who has world-class expertise, a technical team to match anyone in the business, and a creative team to be able to take a white-glove approach and take your online project—whether it's a website or a fully-automated online campaign—if you’re looking for someone who’s going to show up on time, under-promise and over-deliver, it is Followbright.`
    const img2Comment = `ALI: Blown Away By Your Thoroughness I’ve had some questionable experiences with other web agencies in the past, but Followbright has hands down been the best web company we’ve worked with, providing us with peace of mind and incredible service. The blueprint Followbright developed for our company’s new website and SEO plan was incredibly descriptive, comprehensive, organized, and easy to understand. I was actually blown away by their thoroughness, which eased a lot of the stress involved with creating our new Ecommerce site. Thank you    `
    const img3Comment = `ASO: You're Invaluable to Us We've been blown away by the incredible value you deliver, and how your work has translated into increased page view times, lead generations, and dramatic decreases in bounce rate and required support.This is exactly why we rely on—and will continue to rely on—your team for your extensive ExpressionEngine expertise, your exceptional reliability, and your crystal clear communications and organization. Your team consistently goes above and beyond our expectations, and everything we've worked on with you has been a complete success.  You're absolutely invaluable to our national organization, and we look forward to continuing to work with you as strategic partners in the years to come. Brandt    `
    const img4Comment = `AHMED: 'The Followbright team is absolutely fantastic to work with and I would highly recommend them no matter what type of project you have. To find a team of individuals that are responsive, fun to work with, creative, pragmatic, mindful of a client's budget and schedule, and extremely knowledgeable in PHP, SQL, Linux and Apache based web development, strategy, design, marketing and functionality is extremely rare. If you've found the Followbright team, you can be done searching because you've found the holy grail of consultants. You won't find a better group with which to work.    `
    const img5Comment = `SHERZAD: Our engineering firm was under contract with the U.S. Department of Energy for a large environmental impact statement process—the Northern Pass Transmission Project. There were almost 10,000 individuals working on this project. Followbright helped us build our website from scratch that would allow us to comply with requirements. The new site has improved functionality and is user-friendly and easy for us to maintain. The public commenting portal they built has been efficient for the client and saved a great deal of time. Followbright has also helped us completely automate other time-consuming processes. There were no hiccups prior to launch. In my company's line of work, a constant frustration point is that our competitors provide disingenuous proposals to clients. Many consultants will intentionally ignore requirements missed by the client, in order to modify their contract subsequently. We don't do this, and neither does Followbright. If we require a website to have a list of features, 100 percent of them will be realized. They take the time to figure out what the job is, what it will take, and deliver the whole program. We also appreciate Followbright's business approach. It's very matter of fact and down to Earth and we find them to be refreshing from a business standpoint. We appreciate their efficiency, and any company could benefit from it. They have even proven to be an inspiration for our own operations.    `
    const img6Comment = `DARO: You nailed it: you delivered on time and on budget and did so with grace and flexibility. You shined when it came to ease of the process and how you adapted when things don't go as planned. Your communication, understanding, and excitement make you stand out above other web firms. Your entire team was exceptional. Planning was intelligent and dynamic. Communication was clear and engaged. The overall strategy employed and work produced resulted in 95% approval by all of the decision makers involved on our team. This was a function of well-executed visioning and implementation. For a project like this, three "metrics" stand out: time, cost, and fun. Expectations about each of these were met or exceeded by the Followbright team. And that's the sign of a successful project. We have recommended you to others and will continue to do so!    `

    useEffect(() => {

        const fadeUp = gsap.timeline({
            scrollTrigger: {
                trigger: '#section--5',
                start: 'top bottom-=30%',


            }

        })

        fadeUp.from('.headerTitle  , .s5headerText', {
            opacity: 0,
            translateY: 50,
            ease: 'easeInOut',
            filter: "blur(3px)",
            duration: .7,


        })
        fadeUp.from('.s5contentTextSide ', {
            ease: 'easeInOut',
            translateX: 100,
            transform: "scale(2)",
            duration: .7,
            opacity: 0,
        })
        fadeUp.from('.s5contentAnimationSide ', {
            ease: 'easeInOut',
            translateX: 100,
            transform: "scale(.2)",
            duration: .7,
            opacity: 0,
        })
        fadeUp.from('.cliimgs img', {
            ease: 'easeInOut',
            scale: 2,
            opacity: 0,
            duration: .4,


        })
    }, [])



    return (
        <>

            <div id="section--5">
                <div className="container section">
                    <div className="headerTitle">
                        <h1>What My Client Says</h1>
                    </div>
                    <div className="redLineSec5">
                        <div></div>
                    </div>
                    <div className="s5headerText">
                        Examples of Regional/State Clients
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 s5contentAnimationSide">
                            <img src={img7} alt=" ahmed soran clients comments" />
                            <div className="cliimgs">
                                {/* images */}
                                <img id="img1" src={img1} alt=" ahmed soran clients comments" className={`${img1Active ? "cli-active" : ""}`} onClick={() => {
                                    setimg1Active(true)
                                    setimg2Active(false)
                                    setimg3Active(false)
                                    setimg4Active(false)
                                    setimg5Active(false)
                                    setimg6Active(false)

                                }} />
                                <img id="img2" src={img2} alt=" ahmed soran clients comments" className={`${img2Active ? "cli-active" : ""}`} onClick={() => {
                                    setimg1Active(false)
                                    setimg2Active(true)
                                    setimg3Active(false)
                                    setimg4Active(false)
                                    setimg5Active(false)
                                    setimg6Active(false)

                                }} />
                                <img id="img3" src={img3} alt=" ahmed soran clients comments" className={`${img3Active ? "cli-active" : ""}`} onClick={() => {
                                    setimg1Active(false)
                                    setimg2Active(false)
                                    setimg3Active(true)
                                    setimg4Active(false)
                                    setimg5Active(false)
                                    setimg6Active(false)

                                }} />
                                <img id="img4" src={img4} alt=" ahmed soran clients comments" className={`${img4Active ? "cli-active" : ""}`} onClick={() => {
                                    setimg1Active(false)
                                    setimg2Active(false)
                                    setimg3Active(false)
                                    setimg4Active(true)
                                    setimg5Active(false)
                                    setimg6Active(false)

                                }} />
                                <img id="img5" src={img5} alt=" ahmed soran clients comments" className={`${img5Active ? "cli-active" : ""}`} onClick={() => {
                                    setimg1Active(false)
                                    setimg2Active(false)
                                    setimg3Active(false)
                                    setimg4Active(false)
                                    setimg5Active(true)
                                    setimg6Active(false)

                                }} />
                                <img id="img6" src={img6} alt=" ahmed soran clients comments" className={`${img6Active ? "cli-active" : ""}`} onClick={() => {
                                    setimg1Active(false)
                                    setimg2Active(false)
                                    setimg3Active(false)
                                    setimg4Active(false)
                                    setimg5Active(false)
                                    setimg6Active(true)

                                }} />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 s5contentTextSide">
                            <p>{img1Active ? img1Comment : '' || img2Active ? img2Comment : '' ||
                                img3Active ? img3Comment : '' || img4Active ? img4Comment : '' ||
                                    img5Active ? img5Comment : '' || img6Active ? img6Comment : ''

                            }</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
