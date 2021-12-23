import React from 'react'

export default function Posts(props: { ImgSrc: string | undefined; title: string | undefined; des: string | undefined; }) {
    return (
        <div className="posts-project">
            <img src={props.ImgSrc} />
            <h1>{props.title}</h1>
            <p>{props.des}</p>
        </div>
    )
}
