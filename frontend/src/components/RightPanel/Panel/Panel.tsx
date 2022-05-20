import { Box } from "@mantine/core";
import InterviewProfile from "../InterviewDetails";
import "./Panel.css";

const Panel = () : JSX.Element => {

    const interview = {
        id: 3,
        company: "Meta",
        date: new Date(2022, 4, 21),
        pcGlobalScore: 4.3,
        tdGlobalScore: 2.1,
        exGlobalScore: 0,
        idGlobalScore: -1
    }

    return (
        <div id="right-panel">
            <Box
                sx={(theme) => ({
                    backgroundColor: theme.colors.gray[1],
                    borderRadius: theme.radius.md,
                    height: "100%",
                    width: "50vw",
                    minWidth: "20em",
                    textAlign: "left",
                    paddingLeft: "1em",
                    paddingRight: "1em",
                    paddingTop: "0.5em"
                    })}
            >
               <InterviewProfile interview={interview} />
            </Box>
        </div>
    )
}

export default Panel;