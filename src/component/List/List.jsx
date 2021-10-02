import React from 'react';
import arrowDown from '../../assets/arrow-down.svg';

export default function List({
    item,
    listLabel,
    children
}) {
    return (
        <li>
            <input id={`group-${item}`} type="checkbox" hidden />
            <label htmlFor={`group-${item}`}>
                <span ><img src={arrowDown} alt="down arrow"/></span>
                {listLabel}
            </label>
            <ul className={`group-list`} alt="">
                {children}
            </ul>
        </li>
    )
}