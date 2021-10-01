import React from 'react';

export default function ListItem({ text }) {
    // const { policyNum, name, type, agencyName } = props

    return (
        <li className="listItem">
            <a href="#">
                <span>{text}</span>
                <span>Edit</span>
            </a>
        </li>
    );
}