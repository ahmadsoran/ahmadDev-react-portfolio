import React from 'react'

export default function Posts(props) {
    return (
        <div className="posts-project">
            <img src={props.ImgSrc} alt="img" />
            <h1>{props.title}</h1>
            <p>{props.des}</p>
            <a href={props.url} target={'_blank'} rel='noreferrer' style={{color: 'whitesmoke', }}>see Project</a>
        </div>
    )
}
