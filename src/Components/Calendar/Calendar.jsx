import React, {useState} from 'react';
import classnames from "classnames";
import {getMonthData, areEqual, areEqualClosed, howManyAppointInDay} from "./calendar";
import './Calendar.css';
import arrowLeft from '../../assets/img/arrow-left.png';
import arrowRight from '../../assets/img/arrow-right.png';

function Calendar(props) {
    const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const weekDayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const [currentDate, setCurrentDate] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const monthData = getMonthData(date.getFullYear(), date.getMonth());
    const closedDays = props.closedAppointDays.map(timestamp => new Date(+timestamp));
    const hasAppointDays = props.appointmentList.map(item => new Date(+item.timestamp));

    const handlePrevMonthButtonClick = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() - 1);
        setDate(newDate);
    }

    const handleNextMonthButtonClick = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() + 1);
        setDate(newDate);
    }

    return (
        <div className="calendar">
            <header className='calendar__header'>
                <a href="#" onClick={handlePrevMonthButtonClick}>
                    <img src={arrowLeft} alt=""/>
                </a>
                <span>{monthNames[date.getMonth()]},{date.getFullYear()}</span>
                <a href="#" onClick={handleNextMonthButtonClick}>
                    <img src={arrowRight} alt=""/>
                </a>
            </header>

            <table style={{width: "100%", padding: "0 10px", borderSpacing: '0'}}>
                <thead className='table__header'>
                <tr>
                    {weekDayNames.map(name =>
                        <th key={name}>{name}</th>
                    )}
                </tr>
                </thead>

                <tbody>
                {monthData.map((week, index) =>
                    <tr key={index}>
                        {week.map((date, index) => date ?
                            <td
                                key={index}
                                className={classnames('day', {
                                    'today': areEqual(date, currentDate),
                                    'closed': areEqualClosed(date, closedDays),
                                    'has__appoint': howManyAppointInDay(date, hasAppointDays) == 0 ? false : true
                                })}
                            >{date.getDate()}
                            <div className="appoints">
                                {howManyAppointInDay(date, hasAppointDays)}
                            </div>
                            </td>
                            :
                            <td key={index}/>
                        )}
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default Calendar;