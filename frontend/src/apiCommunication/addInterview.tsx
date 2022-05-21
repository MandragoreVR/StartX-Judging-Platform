import axios from "axios";
import { INTERVIEWS_ROUTE } from "../data";

interface AddInterviewProps {
    company: string;
    date: string;
}

const addInterview = async ({ company, date } : AddInterviewProps) => {
    const jsonToSend = {
        "company": company,
        "date": date
    }
    await axios.post(INTERVIEWS_ROUTE, jsonToSend)
        .then((response) => {
            if (response.status === 200) {
                console.log("Interview created");
            } else {
                console.log(response.statusText)
            }
        })
}

export default addInterview;