import { Menu } from "@mantine/core";
import { Database, Trash } from "tabler-icons-react";
import { addInterview, fetchInterviews } from "../../../apiCommunication";
import axios from "axios";
import { BACKEND_ROUTE } from "../../../data/routes";
import { Interview } from "../../../data";

const createSamples = async () => {
    await addInterview({company: "OpenSea", date: "2022-5-23-17:30"})
    await addInterview({company: "Agathos", date: "2022-5-27-18:20"})
    await addInterview({company: "Lucira", date: "2022-5-20-15:40"})
}

const deleteAllInterviews = async () => {
    await axios.delete(BACKEND_ROUTE + "empty");
}

const Shortcut = ({ setInterviews } : { setInterviews : (arg0: Interview[]) => void}) : JSX.Element => {
    return (
        <div>
            <Menu>
                <Menu.Label>To populate the database quicker</Menu.Label>
                <Menu.Item
                    icon={<Database />}
                    onClick={async () => {
                        await createSamples();
                        await fetchInterviews({setInterviews: setInterviews})
                    }}
                >Create sample interviews</Menu.Item>
                <Menu.Item
                    icon={<Trash />}
                    color="red"
                    onClick={async () => {
                        await deleteAllInterviews();
                        await fetchInterviews({setInterviews: setInterviews})
                    }}
                >Delete all interviews</Menu.Item>
            </Menu>
        </div>
    )
}

export default Shortcut;