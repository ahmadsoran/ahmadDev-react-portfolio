import React, { useState } from 'react'
import Contact from './Contact';
export default function Navbar() {
    const [OpenNavBtn, setOpenNavBtn] = useState(false)
    const [ShowModal, setShowModal] = useState(false);
    if (ShowModal) {
        return (
            <div className="my-modal">
                <div className="my-modal-body">
                    <i className="fa-duotone fa-x" onClick={() => setShowModal(!ShowModal)}></i>
                    <Contact />
                </div>
            </div>

        )
    }

    return (
        <>

            <header>
                <section id="section--1">
                    <nav>
                        <div className="container  navHead">
                            <a href="/" className="navbar-brand" >
                                portfolio</a>
                            {!OpenNavBtn &&
                                <div id="hamburger" className={`nvBtns  ${OpenNavBtn ? 'open fixedHam' : ''}`} onClick={() => setOpenNavBtn(!OpenNavBtn)}>
                                    <svg width="30" height="30" viewBox="0 0 100 100">
                                        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                        <path className="line line2" d="M 20,50 H 80" />
                                        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                                    </svg>
                                </div>
                            }

                            <div className="navBg ">
                                <li className={`nav-item`}>
                                    <a href="#section--3" className={`nav-a`}>About</a>
                                    <a className={`nav-a `} href="#section--4">projects</a>
                                    <a className={`nav-a `} href="#section--7" >contact</a>
                                    <button className="btn" onClick={() => {
                                        setShowModal(!ShowModal)
                                        setOpenNavBtn(false)
                                    }
                                    }>Get Started</button>
                                </li>
                            </div>

                        </div>
                    </nav>
                </section>
            </header>
            {OpenNavBtn &&
                <div className={`nvBtns  ${OpenNavBtn ? 'open fixedHam' : ''}`} onClick={() => setOpenNavBtn(!OpenNavBtn)}>
                    <svg width="30" height="30" viewBox="0 0 100 100">
                        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        <path className="line line2" d="M 20,50 H 80" />
                        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                </div>
            }
            <div className="navBg mobileNav ">
                <li className={`nav-item ${OpenNavBtn ? 'open' : ''}`}>
                    <a href="#section--3" className={`nav-a ${OpenNavBtn ? 'fade' : ''}`} onClick={() => setOpenNavBtn(!OpenNavBtn)}>About</a>
                    <a className={`nav-a ${OpenNavBtn ? 'fade' : ''}`} href="#section--4" onClick={() => setOpenNavBtn(!OpenNavBtn)}>projects</a>
                    <a className={`nav-a ${OpenNavBtn ? 'fade' : ''}`} href="#section--7" onClick={() => setOpenNavBtn(!OpenNavBtn)}>contact</a>
                    <button className="btn" onClick={() => {
                        setShowModal(!ShowModal)
                        setOpenNavBtn(false)
                    }
                    }>Get Started</button>
                </li>
            </div>
        </>
    )
}

