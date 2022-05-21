import { SimpleGrid } from "@mantine/core";
import { useState } from "react";
import { Interview } from "../../../data/types";
import InterviewCalendar from "../InterviewCalendar/InterviewCalendar";
import DaySchedule from "../DaySchedule/DaySchedule";
import "./Panel.css";

const Panel = () : JSX.Element => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    const [interviews, setInterviews] = useState<Interview[]>([]);

    return (
        <div id="left-panel">
            <SimpleGrid cols={1}>
                <InterviewCalendar
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    interviews={interviews}
                />
                <DaySchedule
                    interviews={interviews}
                    setInterviews={setInterviews}
                    selectedDate={selectedDate}
                />
            </SimpleGrid>
        </div>
    )
}

export default Panel;