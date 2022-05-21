import { Review } from "../data";
import axios from "axios";
import { REVIEW_ROUTE } from "../data";

interface fetchReviewsProps {
    interviewId: number;
    setReviews: (arg0: Review[]) => void
}

const fetchReviews = async ({ interviewId, setReviews } : fetchReviewsProps) => {
    await axios.get(REVIEW_ROUTE + "/" + interviewId.toString())
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data);
                setReviews(response.data);
            } else {
                console.log("An error occurred while trying to fetch reviews")
            }
        })
}

export default fetchReviews;