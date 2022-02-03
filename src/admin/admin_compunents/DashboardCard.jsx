import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../admin.css'
export default function DashboardCard(props) {
    const navigate = useNavigate()
    return <>
        <div className="col-sm-4">

            <div className="dash-cards" onClick={() => navigate(props.navigatePath)}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    </>;
}
