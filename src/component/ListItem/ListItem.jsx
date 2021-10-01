import React from 'react';

export default function ListItem({ text, onEdit }) {

    return (
        <li className="listItem">
            <a href="#">
                <span>{text}</span>
                <span onClick={onEdit}>Edit</span>
            </a>
        </li>
    );
}