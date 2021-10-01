import React from 'react';
import { useSelector } from 'react-redux';
import List from '../List/List'
import ListItem from '../ListItem/ListItem'

export default function CarrierList() {
    const policiesGrouped = useSelector(state => state.policiesGrouped);

    return (
        <>
            <div className="container" role="banner">
                <div className="header">
                    <h2>GloveBox Carriers</h2>
                    <p>View Policies by Carrier</p>
                </div>
                <nav className="nav" role="navigation">
                    <ul className="nav__list">
                    {Object.keys(policiesGrouped).map((key, index) => {
                        const item = policiesGrouped[key];
                        return (
                            <List
                                type="group"
                                item={index}
                                index={index}
                                listLabel={key}
                            >
                                {item.map(policy => (
                                    <ListItem 
                                    policyNum={policy.policyNumber}
                                    name={`${policy.primaryHolder.firstName} ${policy.primaryHolder.lastName}`}
                                    type={policy.type.name}
                                    agencyName={policy.agencyName}
                                    text={`${policy.policyNumber}, ${policy.type.name}, ${`${policy.primaryHolder.firstName} ${policy.primaryHolder.lastName}`}, \n ${policy.agencyName}`}
                                    />
                                ))}
                            
                            </List>
                        )
                    })}
                    </ul>
                </nav>
            </div>
        </>
    )
}