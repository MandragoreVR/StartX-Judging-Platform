import axios from "axios";
import { INTERVIEWS_ROUTE } from "../data";

interface DeleteInterviewProps {
    interviewId: number;
}

const deleteInterview = async ({ interviewId} : DeleteInterviewProps) => {
    await axios.delete(INTERVIEWS_ROUTE + "/" + interviewId.toString())
        .then((response) => {
            if (response.status === 204) {
                console.log("Interview deleted")
            } else {
                console.log(response.statusText)
            }
        })
}

export default deleteInterview;