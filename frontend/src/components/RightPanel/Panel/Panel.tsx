import { Box } from "@mantine/core";
import InterviewProfile from "../InterviewDetails";
import "./Panel.css";

const Panel = () : JSX.Element => {

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
               <InterviewProfile />
            </Box>
        </div>
    )
}

export default Panel;