import { Box, Group, Text, Title } from "@mantine/core";
import { Interview } from "../../../data/types";

interface DayScheduleProps {
    interviews: Interview[];
    selectedDate: Date;
}

const DaySchedule = ({ interviews, selectedDate }: DayScheduleProps) : JSX.Element => {
    const interviewsToDisplay = interviews.filter(interview => {
        const day = interview.date.getDay() === selectedDate.getDay();
        const month = interview.date.getMonth() === selectedDate.getMonth();
        const year = interview.date.getFullYear() === selectedDate.getFullYear();
        return day && month && year
    });
    return (
        <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
            <Box
                sx={(theme) => ({
                backgroundColor: theme.colors.gray[1],
                borderRadius: theme.radius.md,
                width: "70%",
                minWidth: "20em",
                textAlign: "left",
                paddingLeft: "1em",
                paddingTop: "0.5em"
                })}
            >
                <Title order={2}>
                    Scheduled interviews
                </Title>
                <ul>
                    {interviewsToDisplay.map((interview : Interview) : JSX.Element => {
                        return (
                            <li>
                                <Group spacing={5}>
                                    <Text><b>{interview.company}</b> at </Text>
                                    <Text>{interview.date.toDateString()}</Text>
                                </Group>
                            </li>
                        )
                    })}
                </ul>

            </Box>
        </div>
    )
}

export default DaySchedule;