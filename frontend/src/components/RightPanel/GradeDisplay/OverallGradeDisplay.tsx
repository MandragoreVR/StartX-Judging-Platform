import { Card, RingProgress, SimpleGrid } from "@mantine/core";
import "./GradeDisplay.css";
import { getColor } from "../../../utils";

interface GradeDisplayProps {
    score: number | undefined;
    criteria: string;
}

const GradeDisplay = ({ score, criteria } : GradeDisplayProps) : JSX.Element => {
    return (
        <Card className="overall-grade-display-card">
            <SimpleGrid cols={1} spacing={0}>
                <RingProgress
                    className="overall-grade-displayer"
                    roundCaps
                    thickness={7}
                    size={80}
                    sections={score
                        ? [{
                            value: 20*score,
                            color: getColor(score)
                        }]
                        : []
                    }
                    label={score && score !== -1
                        ? (
                            <div style={{ color: getColor(score) }}>
                                <b>{score}/5</b>
                            </div>
                        ) : (<div>No data</div>)
                    }
                />
                <div>
                    <b>{criteria}</b>
                </div>
            </SimpleGrid>
        </Card>
    )
}

export default GradeDisplay;