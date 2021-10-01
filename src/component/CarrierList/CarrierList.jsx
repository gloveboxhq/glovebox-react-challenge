import React from 'react';
import { useSelector } from 'react-redux';
import './CarrierList.css'


export default function CarrierList() {
    // const policiesGrouped = useSelector(state => state.policiesGrouped);

    return (
        <>
            <div className="container" role="banner">
                <div>
                    <h2>GloveBox Carriers</h2>
                    <p>View Policies by Carrier</p>  
                </div>
                
            </div>
        </>
    )
}