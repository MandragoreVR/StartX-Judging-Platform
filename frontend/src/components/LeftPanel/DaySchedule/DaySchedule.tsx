import { Box, Group, Text, Title } from "@mantine/core";
import { Interview } from "../../../data/types";

const DaySchedule = ({ interviews }: { interviews: Interview[] }) : JSX.Element => {
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
                    {interviews.map((interview : Interview) : JSX.Element => {
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