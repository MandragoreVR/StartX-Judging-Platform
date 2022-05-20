import { RingProgress, Group } from "@mantine/core";
import "./GradeDisplay.css";
import { getColor } from "../../../utils";

interface SpecificGradeDisplayProps {
    score: number;
    criteria: string;
    review: string;
}

const SpecificGradeDisplay = ({ score, criteria, review } : SpecificGradeDisplayProps) : JSX.Element => {
    return(
        <div>
            <Group position="left" spacing={"xs"}>
                <b>{criteria} : </b>
                <RingProgress
                    thickness={4}
                    size={20}
                    sections={[{
                        value: 20*score,
                        color: getColor(score)
                    }, {
                        value: 100 - 20*score,
                        color: "#6A6A6A"
                    }]}
                />
                <div style={{ color: getColor(score) }}><b>{score}/5</b></div>
            </Group>
            <b>Comment : </b>{review}
        </div>
    )
}

export default SpecificGradeDisplay;