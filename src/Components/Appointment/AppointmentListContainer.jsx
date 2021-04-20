import React, {Component} from 'react';
import AppointmentList from "./AppointmentList";
import {connect} from "react-redux";

class AppointmentListContainer extends Component {
    render() {
        return (
            <AppointmentList appointmentList={this.props.appointmentList}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        appointmentList: state.appointment.appointmentList
    }
}


export default connect(mapStateToProps, {})(AppointmentListContainer);