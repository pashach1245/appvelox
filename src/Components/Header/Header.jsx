import React from 'react';
import styles from './Header.module.css';
import searchImg from '../../assets/img/headerNav/search.png';
import eyeImg from '../../assets/img/headerNav/eye1.png';
import bellImg from '../../assets/img/headerNav/bell.png';
import arrowImg from '../../assets/img/headerNav/arrow1.png';


function Header(props) {
    return (
        <div className={styles.header}>
            <div className={styles.header__pageName}>
                <h2>Мой профиль</h2>
            </div>
            <div className={styles.header__nav}>
                <HeaderNavLink src={searchImg} />
                <HeaderNavLink src={bellImg} />
                <HeaderNavLink src={eyeImg} />
                <img src={'https://placehold.it/49x49/333'} alt="" className={styles.avatar}/>
                <HeaderNavLink src={arrowImg} />
            </div>
        </div>
    );
}

const HeaderNavLink = ({src}) => {
    return (
        <a href="#" className={styles.header__nav__link}>
            <img src={src} alt=""/>
        </a>
    )
}

export default Header;