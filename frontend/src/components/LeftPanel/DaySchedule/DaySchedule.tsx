import { Box, Title } from "@mantine/core";
import { Interview } from "../../../data/types";
import "./DaySchedule.css";
import ScheduleLine from "./ScheduleLine";

interface DayScheduleProps {
    interviews: Interview[];
    setInterviews: (arg0: Interview[]) => void;
    selectedDate: Date;
}

const DaySchedule = ({ interviews, setInterviews, selectedDate }: DayScheduleProps) : JSX.Element => {
    const interviewsToDisplay = interviews.filter(interview => {
        const day = interview.date.getDate() === selectedDate.getDate();
        const month = interview.date.getMonth() === selectedDate.getMonth();
        const year = interview.date.getFullYear() === selectedDate.getFullYear();
        return day && month && year
    });

    const addInterview = (interview : Interview) : void => {
        const newInterviews = [...interviews];
        newInterviews.push(interview);
        setInterviews(newInterviews);
    }

    const deleteInterview = (interviewId : number) : void => {
        const newInterviews = interviews.filter(
            interview => interview.id !== interviewId
        );
        setInterviews(newInterviews);
    }

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
                <Title order={2}>
                    Scheduled interviews
                </Title>
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
                                    deleteInterview={deleteInterview}
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