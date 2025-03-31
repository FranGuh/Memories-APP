import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CustomCalendar() {
    const [date, setDate] = useState(new Date());

    return (
        <div className="container my-4 p-4 bg-light rounded shadow">
            <h2 className="text-primary text-center">📅 Mi Calendario</h2>
            <div className="d-flex justify-content-center">
                <Calendar
                    onChange={setDate}
                    value={date}
                    className="border p-2 rounded bg-black shadow-sm"
                />
            </div>
            <p className="mt-3 text-center fs-5">
                <strong>Fecha Seleccionada:</strong> 
                <span className="text-success ms-2">{date.toDateString()}</span>
            </p>
        </div>
    );
}

export default CustomCalendar;