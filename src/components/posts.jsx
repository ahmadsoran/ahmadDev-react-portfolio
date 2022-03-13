import React from 'react'
import AhmedImg from '../assets/img/me2.png'
export default function Posts(props) {
    return (
        <div className="card  ">
            <div className="bodyCard">

                <div className="card-header">
                    <img src={props.ImgSrc} alt={props.alt} />
                </div>
                <div className="card-content">
                    <a href={props.url} target={'_blank'} rel='noreferrer' style={{ color: 'whitesmoke', }}>
                        <span>see Project</span>
                    </a>
                    <h3>{props.title}</h3>
                    <p>{props.des}</p>
                </div>
            </div>
            <div className="card-footer">
                <img src={AhmedImg} alt="Ahmed Soran" />
                <div className="author">
                    <p>Ahmed Soran </p>
                    <small>Full-Stack Developer</small>
                </div>
            </div>
        </div>

    )
}
