import React from 'react';
import styles from './Appointments.module.css';
import AppointmentListContainer from "./AppointmentListContainer";
import Cards from "./Cards/Cards";

function Appointment(props) {
    return (
        <div className={styles.appointment}>
            <div>
                <h3 className={styles.appointment__title}>
                    Записи на прием
                </h3>
                <AppointmentListContainer/>
            </div>
            <div>
                <h3 className={styles.electronicCard__title}>
                    Электронная карта
                </h3>
                <Cards />
            </div>
        </div>
    );
}

export default Appointment;