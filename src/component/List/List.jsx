import React from 'react';
import arrowDown from '../../assets/arrow-down.svg';

export default function List({
    type,
    item,
    listLabel,
    children
}) {
    return (
        <li>
            <input id={`${type}-${item}`} type="checkbox" hidden />
            <label htmlFor={`${type}-${item}`}>
                <span ><img src={arrowDown} /></span>
                {listLabel}
            </label>
            <ul className={`${type}-list`} alt="">
                {children}
            </ul>
        </li>
    )
}