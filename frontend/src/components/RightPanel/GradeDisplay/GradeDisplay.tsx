import { Card, RingProgress, SimpleGrid } from "@mantine/core";
import "./GradeDisplay.css";

const getColor = (score : number) : string => {
    if (score < 0 || score > 5) return "black";

    if (score === 0) return "#FF0D0D";
    else if (score < 1) return "#FF4E11";
    else if (score < 2) return "#FF8E15";
    else if (score < 3) return "#FAB733";
    else if (score < 4) return "#ACB334";
    else return "#69B34C";
}

interface GradeDisplayProps {
    score: number | undefined;
    criteria: string;
}

const GradeDisplay = ({ score, criteria } : GradeDisplayProps) : JSX.Element => {
    return (
        <Card className="grade-display-card">
            <SimpleGrid cols={1} spacing={0}>
                <RingProgress
                    className="grade-displayer"
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
                    label={score
                        ? (
                            <div style={{ color: getColor(score) }}>
                                <b>{score}/5</b>
                            </div>
                        ) : (<div>No data</div>)
                    }
                />
                <div>
                    {criteria}
                </div>
            </SimpleGrid>
        </Card>
    )
}

export default GradeDisplay;