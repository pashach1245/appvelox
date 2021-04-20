import React from 'react';
import IconsSVG from './Icons.svg';
import styles from '../Navbar/Navbar.module.css';


function Icons({name, className}) {

    return(
        <svg className={className ? className : styles.icon}>
            <use xlinkHref={`${IconsSVG}#${name}`} />
        </svg>
    )
}

export default Icons;