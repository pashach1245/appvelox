import React, {useEffect, useLayoutEffect} from 'react';
import styles from './Appointments.module.css';
import malushko1Img from '../../assets/img/doctors/doctor-1.png';
import Button from "../StyledComponents/Button";
import TruncatedList from "react-truncate-list";
import {Link} from "react-router-dom";


function AppointmentList(props) {
    const appoinList = props.appointmentList.map(appoint => <AppointmentItem key={appoint.id} appoint={appoint}/>);

    return (
        <TruncatedList
            className={styles.list__inner}
            renderTruncator={({hiddenItemsCount}) => (
                <div className={styles.more}>
                    <span>Еще {hiddenItemsCount} записи</span>
                    <Link to="/myappoint" className={styles.more__link}>
                        Подробнее
                    </Link>
                </div>
            )}
        >
            {appoinList}
        </TruncatedList>
    );
}

export const AppointmentItem = (props) => {
    const {timestamp, clinicInfo, doctorName, doctorProfile, doctorPhoto} = props.appoint;
    const date = new Date(+timestamp);
    const days = ["Восресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    return (
        <div className={styles.item}>
            <div className={styles.item__info}>
                <span>{days[date.getDay()]} {date.getDate()}.{date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}.{date.getFullYear()} | {date.getHours()}:{date.getMinutes()}</span><br/>
                <span>{clinicInfo}</span>
            </div>
            <div className={styles.doctor}>
                <div className={styles.doctor__info}>
                    <img src={doctorPhoto} alt="" className={styles.doctor__photo}/>
                    <div className={styles.doctor__name}>{doctorName}</div>
                    <div className={styles.doctor__profile}>{doctorProfile}</div>
                </div>
                <Button>Отменить</Button>
            </div>
        </div>
    )
}

export default AppointmentList;