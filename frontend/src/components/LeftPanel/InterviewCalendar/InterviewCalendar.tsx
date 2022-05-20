import Calendar from 'react-calendar';
import "./InterviewCalendar.css";
import 'react-calendar/dist/Calendar.css';
import { AlertCircle } from 'tabler-icons-react';
import { Interview } from '../../../data/types';
import { areDateEqual } from '../../../utils';
import { Indicator } from '@mantine/core';

interface CalendarProps {
  selectedDate: Date;
  setSelectedDate: (arg0: Date) => void;
  interviews: Interview[];
}

const InterviewCalendar = ({ selectedDate, setSelectedDate, interviews } : CalendarProps) : JSX.Element => {

  return (
    <div id="interview-calendar">
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        locale="en-EN"
        tileContent={({ date, view }) => (
          view === 'month' && interviews.filter(interview => areDateEqual(interview.date, date)).length
          ? (
            <Indicator color="lime">
            </Indicator>
          ) : null
        )}
      />
    </div>
  );
}

export default InterviewCalendar;