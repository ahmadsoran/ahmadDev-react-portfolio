import React from 'react'

export default function Contact() {
    return (
        <>

            <div id="section--6">
                <div className="container section">
                    <div className="s6headerTitle">
                        <h1>Let’s Make Something
                            Great Together</h1>
                    </div>
                    <div className="s6headerText">

                        contact me if you need a full-stack developer

                    </div>

                    <div id="section--7" className="formSection">
                        <form action="#" className="section">
                            <div className="row">

                                <div className="col-sm-6">

                                    <input placeholder="name" type="text" name="name" id="name" />
                                </div>
                                <div className="col-sm-6">
                                    <input placeholder="email" type="emai;" name="email" id="email" autoComplete="off" />
                                </div>
                                <div className="col-sm-6">
                                    <input placeholder="phone#" type="text" name="phone" id="phone" />
                                </div>
                                <div className="col-sm-6">
                                    <input placeholder="budget" type="text" name="budget" id="budget" />
                                </div>

                                <div className="textArea">

                                    <textarea name="message" id="" cols={30} rows={10} placeholder="message"></textarea>
                                    <button style={{ width: '100%' }} >Hire Me</button>
                                </div>

                            </div>


                        </form>
                    </div>

                </div>
            </div>

        </>
    )
}
