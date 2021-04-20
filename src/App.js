import styles from './App.module.css';
import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Appointment from "./Components/Appointment/Appointment";
import {BrowserRouter, Route} from "react-router-dom";
import MyAppoint from "./Components/MyAppoint/MyAppoint";

function App() {
    return (
        <BrowserRouter>
            <div className={styles.page}>
                <Navbar/>
                <div>
                    <Header/>
                    <div className={styles.page__content}>
                        <Route exact path='/' render={() => <Appointment/>} />
                        <Route path='/apointlist' render={() => <Appointment/>} />
                        <Route path='/myappoint' render={() => <MyAppoint/>} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
