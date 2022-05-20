import { Group, Title } from "@mantine/core";
import { Interview } from "../../data/types";
import GradeDisplay from "./GradeDisplay/GradeDisplay";

const InterviewProfile = ({ interview } : { interview : Interview}) : JSX.Element => {
    return (
        <div>
            <Title order={2}>
                Interview of {interview.company}
            </Title>
            <Group
                position="center"
                spacing={"xl"}
                style={{ marginTop: "1em" }}
            >
                <GradeDisplay
                    score={interview.pcGlobalScore}
                    criteria="Passion and Commitment"
                />
                <GradeDisplay
                    score={interview.tdGlobalScore}
                    criteria="Team Dynamics"
                />
                <GradeDisplay
                    score={interview.exGlobalScore}
                    criteria="Ability to Execute"
                />
                <GradeDisplay
                    score={interview.idGlobalScore}
                    criteria="Idea"
                />
                <Title order={4}>
                    Global scores
                </Title>
            </Group>
        </div>
    )
}

export default InterviewProfile;