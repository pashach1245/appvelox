import React from 'react';
import styles from './Card.module.css';
import Icons from "../../Icons";

function Cards(props) {
    return (
        <div className={styles.cards}>
            <CardInfoPatient iconName={'card-1'} cardName={'Информация о пациенте'}
                             list={['Ваши личные данные', 'Рекомендации врачей', 'История болезней']}/>
            <Card iconName={'card-2'} cardName={'Результаты анализов'}
                  text={'Вы можете узнать здесь результаты своих анализов'}/>
            <Card iconName={'card-3'} cardName={'Добавить  информацию'}
                  text={'Добавляйте в свою электронную медицинскую карту новые данные'}/>
            <Card iconName={'card-4'} cardName={'История приемов'}
                  text={'Вся информация о полученных услугах за все время хранится здесь'}/>
        </div>
    );
}

const CardInfoPatient = (props) => {
    const {iconName, cardName, list} = props;

    const lists = list.map(item => <li key={item}>{item}</li>);

    return (
        <div className={styles.card}>
            <div className={styles.card__icon__block}>
                <Icons name={iconName} className={styles.card__icon}/>
            </div>
            <div className={styles.card__info}>
                <h3 className={styles.patient__info}>
                    {cardName}
                </h3>
                <ul className={styles.info__inner}>
                    {lists}
                </ul>
            </div>
        </div>
    )
}

const Card = (props) => {
    const {iconName, cardName, text} = props;
    return (
        <div className={styles.card}>
            <div className={styles.card__icon__block}>
                <Icons name={iconName} className={styles.card__icon}/>
            </div>
            <div className={styles.card__info}>
                <h3 className={styles.patient__info}>
                    {cardName}
                </h3>
                <p className={styles.patient__text}>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Cards;