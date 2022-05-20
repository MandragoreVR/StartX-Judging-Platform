import { SimpleGrid } from "@mantine/core";
import { useState } from "react";
import { Interview } from "../../../data/types";
import InterviewCalendar from "../Calendar/Calendar";
import DaySchedule from "../DaySchedule/DaySchedule";
import "./Panel.css";

const interviews : Interview[] = [{
    id: 1,
    company: "Google",
    date: new Date(2022, 5, 20)
}, {
    id: 2,
    company: "Amazon",
    date: new Date(2022, 5, 22)
}]

const Panel = () : JSX.Element => {

    return (
        <div id="left-panel">
            <SimpleGrid cols={1} style={{ width: "100%" }}>
                <InterviewCalendar />
                <DaySchedule interviews={interviews} />
            </SimpleGrid>
        </div>
    )
}

export default Panel;