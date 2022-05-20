import { useState } from 'react';
import Calendar from 'react-calendar';
import "./Calendar.css";
import 'react-calendar/dist/Calendar.css';

const InterviewCalendar = () : JSX.Element => {
  const [value, onChange] = useState(new Date());

  return (
    <div id="interview-calendar">
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default InterviewCalendar;