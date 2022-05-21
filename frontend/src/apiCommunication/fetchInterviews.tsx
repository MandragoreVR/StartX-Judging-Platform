import { Interview } from "../data";
import axios from "axios";
import { INTERVIEWS_ROUTE, ONE_INTERVIEW_ROUTE } from "../data";

interface fetchInterviewsProps {
    interviewId?: number;
    setInterviews: (arg0: Interview[]) => void
}

const fetchInterviews = async ({ interviewId, setInterviews } : fetchInterviewsProps) => {
    if (interviewId) {
        await axios.get(ONE_INTERVIEW_ROUTE + interviewId.toString())
            .then((response) => {
                if (response.status === 200) {
                    return response.data
                }
            })
    } else {
        await axios.get(INTERVIEWS_ROUTE)
            .then((response) => {
                if (response.status === 200) {
                    setInterviews(response.data);
                } else {
                    console.log("An error occurred while trying to fetch interviews")
                }
            })
    }
}

export default fetchInterviews;