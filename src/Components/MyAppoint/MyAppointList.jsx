import React from 'react';
import styles from './MyAppoint.module.css';
import {AppointmentItem} from "../Appointment/AppointmentList";

function MyAppointList(props) {
    const appoinList = props.appointmentList.map(appoint => <AppointmentItem key={appoint.id} appoint={appoint}/>);

    return (
        <div className={styles.myappoint__list}>
            {appoinList}
        </div>
    );
}

export default MyAppointList;