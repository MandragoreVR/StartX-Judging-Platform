import { Box, Group, Text, ThemeIcon, Title } from "@mantine/core";
import { FileArrowRight } from "tabler-icons-react";
import { useSelectedInterview } from "../../../contexts";
import { Interview } from "../../../data/types";
import "./DaySchedule.css";

interface DayScheduleProps {
    interviews: Interview[];
    selectedDate: Date;
}

const DaySchedule = ({ interviews, selectedDate }: DayScheduleProps) : JSX.Element => {
    const { setSelectedInterview } = useSelectedInterview();
    const interviewsToDisplay = interviews.filter(interview => {
        const day = interview.date.getDate() === selectedDate.getDate();
        const month = interview.date.getMonth() === selectedDate.getMonth();
        const year = interview.date.getFullYear() === selectedDate.getFullYear();
        return day && month && year
    });

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
                    paddingTop: "0.5em",
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
                    <ul>
                        {interviewsToDisplay.map((interview : Interview) => (
                            <li key={interview.id}>
                                <Group spacing={5}>
                                    <Text><b>{interview.company}</b> at </Text>
                                    <Text>{interview.date.toDateString()}</Text>
                                    <ThemeIcon>
                                        <FileArrowRight
                                            onClick={() => setSelectedInterview(interview)}
                                            cursor="pointer"
                                        />
                                    </ThemeIcon>
                                </Group>
                            </li>
                        ))}
                    </ul>
                )}
            </Box>
        </div>
    )
}

export default DaySchedule;