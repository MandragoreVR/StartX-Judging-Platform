import { Box, Group, Title } from "@mantine/core";
import { Interview } from "../../../data/types";
import { areDateEqual, dateToString } from "../../../utils";
import AddInterview from "./AddInterview";
import "./DaySchedule.css";
import ScheduleLine from "./ScheduleLine";
import Shortcut from "./Shortcut";

interface DayScheduleProps {
    interviews: Interview[];
    setInterviews: (arg0: Interview[]) => void;
    selectedDate: Date;
}

const DaySchedule = ({ interviews, setInterviews, selectedDate }: DayScheduleProps) : JSX.Element => {
    const interviewsToDisplay = interviews.filter(interview => areDateEqual(interview.date, dateToString(selectedDate)));

    return (
        <div id="day-schedule">
            <Box
                sx={(theme) => ({
                    backgroundColor: theme.colors.gray[1],
                    borderRadius: theme.radius.md,
                    width: "70%",
                    minWidth: "20em",
                    textAlign: "left",
                    paddingLeft: "1em",
                    paddingRight: "1em",
                    paddingTop: "0.5em",
                    paddingBottom: "0.5em",
                    overflow: "auto",
                    height: "25vh"
                })}
            >
                <Group spacing={"md"}>
                    <Title order={2} style={{ paddingBottom: "0.3em" }}>
                        Scheduled interviews
                    </Title>
                    <AddInterview setInterviews={setInterviews}/>
                    <Shortcut setInterviews={setInterviews}/>
                </Group>

                {interviewsToDisplay.length === 0
                ? (
                    <div>
                        No interview scheduled today.
                    </div>
                ) : (
                    <ul style={{ paddingLeft: "5%" }}>
                        {interviewsToDisplay.map((interview : Interview) => (
                            <li key={interview.id}>
                                <ScheduleLine
                                    interview={interview}
                                    setInterviews={setInterviews}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </Box>
        </div>
    )
}

export default DaySchedule;