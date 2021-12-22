import React, { useState } from 'react'
import layaer from '../assets/img/layaer.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
    const [OpenNavBtn, setOpenNavBtn] = useState(false)

    return (
        <>

            <header>
                <section id="section--1">
                    <nav>
                        <div className="container  navHead">
                            <Link to="/" className="navbar-brand" >
                                portfolio</Link>
                            <img src={layaer} className="layaer" alt="" />
                            <div id="hamburger" className={`nvBtns  ${OpenNavBtn ? 'open' : ''}`} onClick={() => setOpenNavBtn(!OpenNavBtn)}>
                                <svg width="30" height="30" viewBox="0 0 100 100">
                                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                    <path className="line line2" d="M 20,50 H 80" />
                                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                                </svg>
                            </div>

                            <div className="navBg">
                                <li className={`nav-item ${OpenNavBtn ? 'open' : ''}`}>
                                    <Link className={`nav-link ${OpenNavBtn ? 'fade' : ''}`} to="#section--3" onClick={() => setOpenNavBtn(!OpenNavBtn)}>About</Link>
                                    <Link className={`nav-link ${OpenNavBtn ? 'fade' : ''}`} to="#section--4" onClick={() => setOpenNavBtn(!OpenNavBtn)}>projects</Link>
                                    <Link className={`nav-link ${OpenNavBtn ? 'fade' : ''}`} to="#section--7" onClick={() => setOpenNavBtn(!OpenNavBtn)}>contact</Link>
                                    <button className="btn" onClick={() => setOpenNavBtn(!OpenNavBtn)}>Get Started</button>
                                </li>
                            </div>

                        </div>
                    </nav>
                </section>
            </header>
        </>
    )
}
