import React from 'react'

export default function Success(props) {
    return (
        <div className={`alert ${props.classes}`}>
            <div className="alert-body">
                <i className="fa fa-check-circle"></i>
                <h1>{props.thankyou}</h1>
                <p>{props.message}</p>
            </div>
        </div>
    )
}
