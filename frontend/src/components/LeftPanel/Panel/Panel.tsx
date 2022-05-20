import { SimpleGrid } from "@mantine/core";
import { useState } from "react";
import { Interview } from "../../../data/types";
import InterviewCalendar from "../InterviewCalendar/InterviewCalendar";
import DaySchedule from "../DaySchedule/DaySchedule";
import "./Panel.css";

const startingInterviews : Interview[] = [{
    id: 1,
    company: "Google",
    date: new Date(2022, 4, 20),
    pcGlobalScore: 4.5,
    tdGlobalScore: 3.2,
    exGlobalScore: 1.1,
    idGlobalScore: 2.8,
}, {
    id: 2,
    company: "Amazon",
    date: new Date(2022, 4, 22),
    pcGlobalScore: 5,
    tdGlobalScore: 3,
    exGlobalScore: 0,
}]

const Panel = () : JSX.Element => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    const [interviews, setInterviews] = useState<Interview[]>(startingInterviews);

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