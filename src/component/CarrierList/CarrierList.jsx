import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import List from '../List/List'
import EditPolicy from '../EditPolicy/EditPolicy'
import ListItem from '../ListItem/ListItem'

export default function CarrierList() {
    const policiesGrouped = useSelector(state => state.policiesGrouped);
    const [selectedPolicy, setSelectedPolicy] = useState(null);

    return (
        <>
            {
                selectedPolicy && <EditPolicy
                    selectedPolicy={selectedPolicy}
                    hidePopup={() => setSelectedPolicy(null)}
                />
            }
            <div className="container" role="hero">
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
                                    item={index}
                                    index={index}
                                    listLabel={key}
                                >
                                    {item.map((policy, pIndex) => (
                                        <ListItem
                                            key={pIndex}
                                            onEdit={() => setSelectedPolicy(policy)}
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