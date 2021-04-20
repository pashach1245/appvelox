import {combineReducers, createStore} from "redux";
import AppointmentReducer from "./Appointment-reducer";

const reducers = combineReducers({
    appointment: AppointmentReducer,
});

const store = createStore(reducers);

export default store;