import React from 'react';
import styles from './MyAppoint.module.css';
import {NavLink} from "react-router-dom";
import backArrow from '../../assets/img/back-arrow.png';
import Calendar from "../Calendar/Calendar.jsx";
import MyAppointList from "./MyAppointList";
import {connect} from "react-redux";

class MyAppointContainer extends React.Component {
    render () {
        return (
            <MyAppoint appointmentList={this.props.appointmentList} closedAppointDays={this.props.closedAppointDays}/>
        )
    }
}

function MyAppoint(props) {
    return (
        <div className={styles.myappoint}>
            <NavLink to={'/apointlist'} className={styles.myappoint__link}>
                <img src={backArrow} alt=""/>
                <span>Мои записи</span>
            </NavLink>
            <div className={styles.myappoint__content}>
                <MyAppointList appointmentList={props.appointmentList} />
                <Calendar closedAppointDays={props.closedAppointDays} appointmentList={props.appointmentList}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        appointmentList: state.appointment.appointmentList,
        closedAppointDays: state.appointment.closedAppointDays
    }
}

export default connect(mapStateToProps, {})(MyAppointContainer);