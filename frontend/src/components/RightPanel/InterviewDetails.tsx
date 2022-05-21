import { Group, Title } from "@mantine/core";
import { useSelectedInterview } from "../../contexts";
import GradeDisplay from "./GradeDisplay/OverallGradeDisplay";
import Reviews from "./Reviews/Reviews";

const InterviewDetails = () : JSX.Element => {
    const { selectedInterview } = useSelectedInterview();
    return (
        <div>
            {selectedInterview ? (
                <>
                    <Title order={2}>
                        Interview of {selectedInterview.company}
                    </Title>
                    <Group
                        position="center"
                        spacing={"xl"}
                        style={{ marginTop: "1em" }}
                    >
                        <GradeDisplay
                            score={selectedInterview.pcGlobalScore}
                            criteria="Passion and Commitment"
                        />
                        <GradeDisplay
                            score={selectedInterview.tdGlobalScore}
                            criteria="Team Dynamics"
                        />
                        <GradeDisplay
                            score={selectedInterview.exGlobalScore}
                            criteria="Ability to Execute"
                        />
                        <GradeDisplay
                            score={selectedInterview.idGlobalScore}
                            criteria="Idea"
                        />
                        <Title order={4} style={{ marginBottom: "2em" }}>
                            Global scores
                        </Title>
                    </Group>
                    <Reviews />
                </>) : <Title order={2}>No interview selected</Title>
            }
        </div>
    )
}

export default InterviewDetails;