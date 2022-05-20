import { Box } from "@mantine/core";
import InterviewDetails from "../InterviewDetails";
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
                    paddingTop: "0.5em",
                    paddingBottom: "0.5em",
                    overflow: "auto",
                })}
            >
               <InterviewDetails />
            </Box>
        </div>
    )
}

export default Panel;