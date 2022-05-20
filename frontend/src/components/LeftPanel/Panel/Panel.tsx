import { SimpleGrid } from "@mantine/core";
import { useEffect, useState } from "react";
import { Interview } from "../../../data/types";
import InterviewCalendar from "../InterviewCalendar/InterviewCalendar";
import DaySchedule from "../DaySchedule/DaySchedule";
import "./Panel.css";

const interviews : Interview[] = [{
    id: 1,
    company: "Google",
    date: new Date(2022, 4, 20)
}, {
    id: 2,
    company: "Amazon",
    date: new Date(2022, 4, 22)
}]

const Panel = () : JSX.Element => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    return (
        <div id="left-panel">
            <SimpleGrid cols={1} style={{ width: "100%" }}>
                <InterviewCalendar
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
                <DaySchedule
                    interviews={interviews}
                    selectedDate={selectedDate}
                />
            </SimpleGrid>
        </div>
    )
}

export default Panel;