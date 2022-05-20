import { Accordion, Title } from "@mantine/core";
import { useSelectedInterview } from "../../../contexts";
import { Review } from "../../../data/types";
import SpecificGradeDisplay from "../GradeDisplay/SpecificGradeDisplayer";
import useStyles from "./ReviewsStyle";

const reviewComments : Review[] = [{
    interviewId: 1,
    judgeName: "John Cena",
    overallDebrief: "Pretty good presentation, that's promising!",
    pcScore: 4,
    pcDebrief: "Very passionate, the commitment is impressive !",
    tdScore: 3.2,
    tdDebrief: "The team is really well built, but could gain by communicating a little bit more",
    exScore: 1.1,
    exDebrief: "Not good at all",
    idScore: 5,
    idDebrief: "The idea is brilliant!"
}, {
    interviewId: 1,
    judgeName: "Dwayne Johnson",
    overallDebrief: "Good global result, but it could be better",
    pcScore: 2.3,
    pcDebrief: "I believe that they're passionate, but I still don't quite feel it...",
    tdScore: 5,
    tdDebrief: "What a team!",
    exScore: 2.7,
    exDebrief: "Quite good",
    idScore: 4.1,
    idDebrief: "The idea is really good!"
}, {
    interviewId: 2,
    judgeName: "Gal Gadot",
    overallDebrief: "Quite good, but the idea is not amazing",
    pcScore: 1,
    pcDebrief: "I'm not convinced",
    tdScore: 4.2,
    tdDebrief: "Good team, they work well with each other",
    exScore: 5,
    exDebrief: "The execution is flawless!",
    idScore: 2.6,
    idDebrief: "The idea is okay, but I could have come up with it..."
}]

const Reviews = () : JSX.Element => {
    const { classes } = useStyles();
    const { selectedInterview } = useSelectedInterview();
    const reviewsToDisplay = reviewComments.filter((review) => (
        selectedInterview && review.interviewId === selectedInterview.id
    ))
    return (
        <Accordion classNames={classes}>
            {
                reviewsToDisplay.map((review : Review) => (
                    <Accordion.Item
                        label={
                            <div>
                                <Title order={3}>
                                    Review by {review.judgeName}
                                </Title>
                                <br/>
                                <i>{review.overallDebrief}</i>
                            </div>
                        }
                        key={`${review.interviewId}by${review.judgeName}`}
                    >
                        <SpecificGradeDisplay
                            score={review.pcScore}
                            criteria="Passion and Commitment"
                            review={review.pcDebrief}
                        />
                        <br/>
                        <SpecificGradeDisplay
                            score={review.tdScore}
                            criteria="Team Dynamics"
                            review={review.tdDebrief}
                        />
                        <br/>
                        <SpecificGradeDisplay
                            score={review.exScore}
                            criteria="Ability to Execute"
                            review={review.exDebrief}
                        />
                        <br/>
                        <SpecificGradeDisplay
                            score={review.idScore}
                            criteria="Idea"
                            review={review.idDebrief}
                        />
                    </Accordion.Item>
                ))
            }
        </Accordion>
    )
}

export default Reviews;