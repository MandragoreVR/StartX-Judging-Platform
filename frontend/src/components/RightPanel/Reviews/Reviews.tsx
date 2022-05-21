import { Accordion, Button, Title, Space, Group } from "@mantine/core";
import { useState } from "react";
import { useSelectedInterview } from "../../../contexts";
import { Review } from "../../../data/types";
import { stringToDate } from "../../../utils";
import SpecificGradeDisplay from "../GradeDisplay/SpecificGradeDisplayer";
import AddReview from "./AddReview";
import useStyles from "./ReviewsStyle";

const Reviews = () : JSX.Element => {
    const { classes } = useStyles();
    const { selectedInterview } = useSelectedInterview();
    const [ openForm, setOpenForm ] = useState<boolean>(false);
    const [ reviews, setReviews ] = useState<Review[]>([]);
    const reviewsToDisplay = reviews.filter((review) => (
        selectedInterview && review.interviewId === selectedInterview.id
    ))

    const addReview = (review : Review) : void => {
        const newReview = [...reviews];
        newReview.push(review);
        setReviews(newReview);
    }

    return (
        <div>
           {reviewsToDisplay.length === 0
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
                        style={selectedInterview && stringToDate(selectedInterview?.date) > new Date()
                            ? { display: 'none'} : {}}
                    >
                        Add your review
                    </Button>
                    <AddReview
                        addReview={addReview}
                        openForm={openForm}
                        setOpenForm={setOpenForm}
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
                        addReview={addReview}
                        openForm={openForm}
                        setOpenForm={setOpenForm}
                    />
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
                </div>
            )}
        </div>
    )
}

export default Reviews;