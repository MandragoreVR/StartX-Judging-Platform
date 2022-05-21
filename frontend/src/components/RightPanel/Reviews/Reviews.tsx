import { Accordion, Button, Title, Space, Group } from "@mantine/core";
import { useEffect, useState } from "react";
import { fetchReviews } from "../../../apiCommunication";
import { useSelectedInterview } from "../../../contexts";
import { Review } from "../../../data/types";
import { stringToDate } from "../../../utils";
import SpecificGradeDisplay from "../GradeDisplay/SpecificGradeDisplayer";
import AddReview from "./AddReview";
import useStyles from "./ReviewsStyle";

const reviewComments : Review[] = [{
    interview_id: 1,
    judge_name: "David Sanchez",
    overall_debrief: "Pretty good presentation, that's promising!",
    pc_score: 4,
    pc_debrief: "Very passionate, the commitment is impressive !",
    td_score: 3.2,
    td_debrief: "The team is really well built, but could gain by communicating a little bit more",
    ex_score: 1.1,
    ex_debrief: "Not good at all",
    id_score: 5,
    id_debrief: "The idea is brilliant!"
}, {
    interview_id: 1,
    judge_name: "Bella Fojut",
    overall_debrief: "Good global result, but it could be better",
    pc_score: 2.3,
    pc_debrief: "I believe that they're passionate, but I still don't quite feel it...",
    td_score: 5,
    td_debrief: "What a team!",
    ex_score: 2.7,
    ex_debrief: "Quite good",
    id_score: 4.1,
    id_debrief: "The idea is really good!"
}, {
    interview_id: 2,
    judge_name: "Joseph Huang",
    overall_debrief: "Quite good, but the idea is not amazing",
    pc_score: 1,
    pc_debrief: "I'm not convinced",
    td_score: 4.2,
    td_debrief: "Good team, they work well with each other",
    ex_score: 5,
    ex_debrief: "The execution is flawless!",
    id_score: 2.6,
    id_debrief: "The idea is okay, but I could have come up with it..."
}]

const Reviews = () : JSX.Element => {
    const { classes } = useStyles();
    const { selectedInterview } = useSelectedInterview();
    const [ openForm, setOpenForm ] = useState<boolean>(false);
    const [ reviews, setReviews ] = useState<Review[]>(reviewComments);

    const addManualReview = (review : Review) : void => {
        const newReview = [...reviews];
        newReview.push(review);
        setReviews(newReview);
    }

    // Fetching of the reviews
    // useEffect(() => {
    //     if (selectedInterview) {
    //         fetchReviews({
    //             interviewId: selectedInterview?.id,
    //             setReviews: setReviews
    //         })
    //     }
    // }, [selectedInterview])

    return (
        <div>
           {reviews.length === 0
           ? (
               <div>
                    <Title order={3}>
                        Reviews of the judges
                    </Title>
                    <Space h="xs" />
                    <i>No reviews yet</i>
                    <Space h="xs" />
                    <Button
                        color="green"
                        onClick={() => setOpenForm(true)}
                        style={selectedInterview && stringToDate(selectedInterview.date) > new Date()
                            ? { display: 'none'} : {}}
                    >
                        Add your review
                    </Button>
                    <AddReview
                        openForm={openForm}
                        setOpenForm={setOpenForm}
                        addManualReview={addManualReview}
                    />
                </div>
            ) : (
                <div>
                    <Group position="left" spacing={"xl"}>
                        <Title order={3}>
                            Reviews of the judges
                        </Title>
                        <Button
                            color="green"
                            onClick={() => setOpenForm(true)}
                            style={selectedInterview && stringToDate(selectedInterview?.date) > new Date()
                                ? { display: 'none'} : {}}
                        >
                            Add your review
                        </Button>
                    </Group>
                    <AddReview
                        openForm={openForm}
                        setOpenForm={setOpenForm}
                        addManualReview={addManualReview}
                    />
                    <Accordion classNames={classes}>
                        {
                            reviews.map((review : Review) => (
                                <Accordion.Item
                                    label={
                                        <div>
                                            <Title order={3}>
                                                Review by {review.judge_name}
                                            </Title>
                                            <br/>
                                            <i>{review.overall_debrief}</i>
                                        </div>
                                    }
                                    key={`${review.interview_id}by${review.judge_name}`}
                                >
                                    <SpecificGradeDisplay
                                        score={review.pc_score}
                                        criteria="Passion and Commitment"
                                        review={review.pc_debrief}
                                    />
                                    <br/>
                                    <SpecificGradeDisplay
                                        score={review.td_score}
                                        criteria="Team Dynamics"
                                        review={review.td_debrief}
                                    />
                                    <br/>
                                    <SpecificGradeDisplay
                                        score={review.ex_score}
                                        criteria="Ability to Execute"
                                        review={review.ex_debrief}
                                    />
                                    <br/>
                                    <SpecificGradeDisplay
                                        score={review.id_score}
                                        criteria="Idea"
                                        review={review.id_debrief}
                                    />
                                </Accordion.Item>
                            ))
                        }
                    </Accordion>
                </div>
            )}
        </div>
    )
}

export default Reviews;