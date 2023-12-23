import React, { useState } from 'react';
import './css/CalendarStyles.css'; // Importa tu archivo CSS
const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

    const generateCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDay = new Date(year, month, 1).getDay();
        const totalDays = daysInMonth(year, month);

        const calendar = [];
        let dayCount = 1;

        // Fill in the days of the month in rows and columns
        for (let row = 0; row < 6; row++) {
            const week = [];
            for (let col = 0; col < 7; col++) {
                if ((row === 0 && col < firstDay) || dayCount > totalDays) {
                    week.push(null);
                } else {
                    week.push(new Date(year, month, dayCount));
                    dayCount++;
                }
            }
            calendar.push(week);
        }

        return calendar;
    };

    const handlePrevMonth = () => {
        setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    };

    return (
        <div className="dates-cont">
            <div className="calendar-container">
                <div className="header">
                    <button className="nav-button" onClick={handlePrevMonth}>&lt;</button>
                    <span className='header__text'>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
                    <button className="nav-button" onClick={handleNextMonth}>&gt;</button>
                </div>
                <table className="calendar-table">
                    <thead>
                        <tr>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateCalendar().map((week, rowIndex) => (
                            <tr key={rowIndex}>
                                {week.map((day, colIndex) => (
                                    <td key={colIndex} className={day ? 'calendar-day' : 'empty-day'}>{day ? day.getDate() : ''}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Calendar;