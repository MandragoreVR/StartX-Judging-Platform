import axios from "axios";
import { REVIEW_ROUTE, Review } from "../data";

const addReview = async (review : Review) => {
    const jsonToSend = {
        ...review
    }
    console.log(jsonToSend)
    await axios.post(REVIEW_ROUTE, jsonToSend)
        .then((response) => {
            if (response.status === 200) {
                console.log("Review created");
            } else {
                console.log(response.statusText)
            }
        })
}

export default addReview;