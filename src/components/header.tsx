import React from 'react'
import img1 from '../assets/img/earth.png'
export default function Header() {

    return (

        <>
            <main>
                <div id="section--2">
                    <div className="container ">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-6 s2">
                                <div className="myText">
                                    <h4>hey, iam</h4>
                                    <h1>ahmed soran majeed</h1>
                                    <h4>from <span>kurdistan</span> iraq , developing websites & apps</h4>
                                </div>
                                <div className="socialBtn">
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fab fa-github"></i>
                                    <i
                                        className="fab fa-facebook"></i>
                                </div>
                                <div className="portLike">
                                    <h1>did you like my portfolio?</h1>
                                    <h1>thankyou</h1>
                                    <div className="like-dislike-btn">
                                        <i className="far fa-thumbs-up" > yes</i>
                                        <i className="far fa-thumbs-down"> no</i>

                                    </div>
                                    <p>0 voted yes</p>
                                </div>

                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 s2">
                                <div className="myImage">
                                    <img src={img1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}
