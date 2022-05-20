import { useState } from 'react';
import Calendar from 'react-calendar';
import "./InterviewCalendar.css";
import 'react-calendar/dist/Calendar.css';

interface CalendarProps {
  selectedDate: Date;
  setSelectedDate: (arg0: Date) => void;
}

const InterviewCalendar = ({ selectedDate, setSelectedDate } : CalendarProps) : JSX.Element => {

  return (
    <div id="interview-calendar">
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
      />
    </div>
  );
}

export default InterviewCalendar;