import React from 'react'

export default function Posts(props) {
    return (
        <div className="posts-project">
            <img src={props.ImgSrc} />
            <h1>{props.title}</h1>
            <p>{props.des}</p>
        </div>
    )
}
