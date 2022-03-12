import React from 'react'
import AhmedImg from '../assets/img/me2.png'
export default function Posts(props) {
    return (
        <div class="card">
            <div className="bodyCard">

                <div class="card-header">
                    <img src={props.ImgSrc} alt={props.alt} />
                </div>
                <div class="card-content">
                    <a href={props.url} target={'_blank'} rel='noreferrer' style={{ color: 'whitesmoke', }}>
                        <span>see Project</span>
                    </a>
                    <h3>{props.title}</h3>
                    <p>{props.des}</p>
                </div>
            </div>
            <div class="card-footer">
                <img src={AhmedImg} alt="Ahmed Soran" />
                <div class="author">
                    <p>Ahmed Soran </p>
                    <small>Full-Stack Developer</small>
                </div>
            </div>
        </div>

    )
}
