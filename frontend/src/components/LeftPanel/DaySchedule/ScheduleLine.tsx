import { Button, Group, Modal, Popover, Text, ThemeIcon } from "@mantine/core";
import { useState } from "react";
import { FileArrowRight, Trash } from "tabler-icons-react";
import { useSelectedInterview } from "../../../contexts";
import { Interview } from "../../../data/types";
import { displayDate } from "../../../utils";

interface ScheduleLineProps {
    interview: Interview;
    deleteInterview: (arg0: number) => void;
}

const ScheduleLine = ({ interview, deleteInterview } : ScheduleLineProps) : JSX.Element => {
    const { setSelectedInterview } = useSelectedInterview();
    const [ infoPopover, setInfoPopover ] = useState<boolean>(false);
    const [ deletePopover, setDeletePopover ] = useState<boolean>(false);
    const [ deleteModal, setDeleteModal ] = useState<boolean>(false);

    return (
        <div>
            <Modal
                opened={deleteModal}
                onClose={() => setDeleteModal(false)}
                title="Do you really want to delete this interview ?"
            >
                <Group position="center">
                    <Button
                        color="green"
                        onClick={() => setDeleteModal(false)}
                    >
                        No
                    </Button>
                    <Button
                        color="red"
                        onClick={() => deleteInterview(interview.id)}
                    >
                        Yes
                    </Button>
                </Group>
            </Modal>
            <Group spacing={"md"}>
                <Group spacing={5}>
                    <Text style={{ fontSize: "1.2em"}}>
                        <b>{interview.company}</b> at
                    </Text>
                    <Text style={{ fontSize: "1.2em"}}>
                        {displayDate(interview.date, true)}
                    </Text>
                </Group>

                <Popover
                    opened={infoPopover}
                    onClose={() => setInfoPopover(false)}
                    position="top"
                    placement="center"
                    withArrow
                    closeOnEscape={false}
                    transition="pop-top-left"
                    target={
                        <ThemeIcon
                            size={30}
                            onMouseEnter={() => setInfoPopover(true)}
                            onMouseLeave={() => setInfoPopover(false)}
                        >
                            <FileArrowRight
                                onClick={() => setSelectedInterview(interview)}
                                cursor="pointer"
                            />
                        </ThemeIcon>
                    }
                >
                    See judges' reviews
                </Popover>

                <Popover
                    opened={deletePopover}
                    onClose={() => setDeletePopover(false)}
                    position="top"
                    placement="center"
                    withArrow
                    closeOnEscape={false}
                    transition="pop-top-left"
                    target={
                        <ThemeIcon
                            size={30}
                            color="red"
                            onMouseEnter={() => setDeletePopover(true)}
                            onMouseLeave={() => setDeletePopover(false)}
                        >
                            <Trash
                                onClick={() => setDeleteModal(true)}
                                cursor="pointer"
                            />
                        </ThemeIcon>
                    }
                >
                    Delete interview
                </Popover>
            </Group>
        </div>
    )
}

export default ScheduleLine;