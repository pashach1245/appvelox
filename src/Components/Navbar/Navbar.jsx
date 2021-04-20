import React from 'react';
import styles from './Navbar.module.css';
import Icons from "../Icons";
import footerLogo from '../../assets/img/footer__logo.png';

function Navbar(props) {
    return (
        <div className={styles.navbar}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <a href="#" className={styles.logo__icon}>
                        Логотип
                    </a>
                </div>
                <NavLink name={'navbar-1'} text={'Профиль'} />
                <NavLink name={'navbar-2'} text={'Врачи и клиники'} />
                <NavLink name={'navbar-3'} text={'Сообщения'} />
                <NavLink name={'navbar-4'} text={'Тестирование'} />
                <NavLink name={'navbar-5'} text={'Полезно знать'} />
                <div style={{textAlign: 'center'}}>
                    <button className={styles.nav__btn}>
                        Подать заявку
                    </button>
                </div>
            </nav>
            <div className={styles.nav__footer}>
                <div className={styles.footer__help}>
                    <Icons name={'navbar-help'} />
                    <span>Помощь</span>
                </div>
                <a href="#">
                    <img src={footerLogo} alt=""/>
                </a>
            </div>
        </div>
    );
}

const NavLink = (props) => {
    return (
        <a href="#" className={styles.nav__link}>
            <Icons name={props.name} />
            <span className={styles.nav__text}>{props.text}</span>
        </a>
    )
}

export default Navbar;