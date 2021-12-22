import React from 'react'
import IMG1 from '../assets/img/bootstrap.png'
import IMG3 from '../assets/img/css.png'
import IMG4 from '../assets/img/html.png'
import IMG5 from '../assets/img/js.png'
import IMG6 from '../assets/img/node.png'
import IMG7 from '../assets/img/php.png'
import IMG8 from '../assets/img/sass.png'
import IMG9 from '../assets/img/react-1-282599.png'
import IMG10 from '../assets/img/mysql.png'

export default function AboutME() {
    return (
        <>

            <div id="section--3">
                <div className="container section ">
                    <div className="aboutSection">
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
                                    <h4>others with basics experience</h4>
                                    <li>php</li>
                                    <li>mysql</li>
                                    <li>react native</li>
                                </ul>


                                <button className="customBTN1">Download CV</button>


                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 mg" >
                                <div className="devimg" >
                                    <img src={IMG1} />
                                    <img src={IMG3} />
                                    <img src={IMG4} />
                                    <img src={IMG5} />
                                    <img src={IMG6} />
                                    <img src={IMG7} />
                                    <img src={IMG8} />
                                    <img src={IMG9} />
                                    <img src={IMG10} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
