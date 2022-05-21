import { Box, Group, Title } from "@mantine/core";
import { useSelectedInterview } from "../../../contexts";
import { Interview } from "../../../data/types";
import { areDateEqual, dateToString } from "../../../utils";
import AddInterview from "./AddInterview";
import "./DaySchedule.css";
import ScheduleLine from "./ScheduleLine";

interface DayScheduleProps {
    interviews: Interview[];
    setInterviews: (arg0: Interview[]) => void;
    selectedDate: Date;
}

const DaySchedule = ({ interviews, setInterviews, selectedDate }: DayScheduleProps) : JSX.Element => {
    const interviewsToDisplay = interviews.filter(interview => areDateEqual(interview.date, dateToString(selectedDate)));

    const { selectedInterview, setSelectedInterview } = useSelectedInterview();

    const addInterview = (interview : {company: string, date: string}) : void => {
        const newInterviews = [...interviews];
        newInterviews.push({ id: 0, ...interview });
        setInterviews(newInterviews);
    }

    const deleteInterview = (interviewId : number) : void => {
        const newInterviews = interviews.filter(
            interview => interview.id !== interviewId
        );
        setInterviews(newInterviews);
        if (selectedInterview && selectedInterview.id === interviewId) {
            setSelectedInterview(null);
        }
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
                <Group spacing={"md"}>
                    <Title order={2} style={{ paddingBottom: "0.3em" }}>
                        Scheduled interviews
                    </Title>
                    <AddInterview addInterview={addInterview}/>
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