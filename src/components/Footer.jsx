import React from 'react'

export default function Footer() {
    return (
        <>
            <div id="section--8">
                <div className="container section">
                    <footer>
                        <h1>
                            Portfolio
                        </h1>
                        <div className="footerLinks ">
                            <a className="Flink" href="#section--3">about</a>&nbsp;|&nbsp;
                            <a className="Flink" href="#section--4">projects</a>&nbsp; |&nbsp;
                            <a className="Flink" href="#section--7">contact</a>

                        </div>
                    </footer>
                </div>
                <hr />
                <div className="copy">
                    <p> copyright &copy; &nbsp;{new Date().getFullYear()} ahmad | all right reserved</p>
                </div>
            </div>
        </>
    )
}
