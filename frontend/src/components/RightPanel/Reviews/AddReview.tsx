import { Button, Collapse, Grid, Group, Space, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Review } from "../../../data/types";
import { useSelectedInterview } from "../../../contexts";
import CriteriaGradingComponent from "./CriteriaGradingComponent";
import { dateToString } from "../../../utils";
// import { addReview } from "../../../apiCommunication";

interface AddReviewProps {
    openForm: boolean;
    setOpenForm: (arg0: boolean) => void;
    addManualReview: (arg0: Review) => void;
}

const AddReview = ({ openForm, setOpenForm, addManualReview } : AddReviewProps) : JSX.Element => {
    const { selectedInterview } = useSelectedInterview();

    const form = useForm<Review>({
        initialValues: {
            interview_id: selectedInterview ? selectedInterview.id : 0,
            judge_name: '',
            pc_score: 2.5,
            pc_debrief: '',
            td_score: 2.5,
            td_debrief: '',
            ex_score: 2.5,
            ex_debrief: '',
            id_score: 2.5,
            id_debrief: '',
            overall_debrief: '',
            publication_date: dateToString(new Date())
        },
        validate: {
            judge_name: (value) => value.length <= 100 ? null : "Name is too long",
            pc_debrief: (value) => value.length <= 500 ? null : "Comment must not exceed 500 characters",
            td_debrief: (value) => value.length <= 500 ? null : "Comment must not exceed 500 characters",
            ex_debrief: (value) => value.length <= 500 ? null : "Comment must not exceed 500 characters",
            id_debrief: (value) => value.length <= 500 ? null : "Comment must not exceed 500 characters",
            overall_debrief: (value) => value.length <= 500 ? null : "Overall comment must not exceed 500 characters",
        }
    })
    return (
        <div>
            <Collapse in={openForm}>
                <form onSubmit={form.onSubmit((values) => {
                    form.reset();
                    addManualReview({
                        ...form.values
                    })
                    setOpenForm(false);
                })}>
                    <TextInput
                        style={{ width: "50%" }}
                        required
                        label="Judge name"
                        placeholder="John Doe"
                        {...form.getInputProps('judge_name')}
                    />

                    <Space h="sm" />

                    <Grid columns={2}>
                        <Grid.Col span={1}>
                            <CriteriaGradingComponent
                                criteria="Passion and Commitment"
                                smallForCriteria="pc"
                                form={form}
                            />
                        </Grid.Col>
                        <Grid.Col span={1}>
                            <CriteriaGradingComponent
                                criteria="Team Dynamics"
                                smallForCriteria="td"
                                form={form}
                            />
                        </Grid.Col>
                        <Grid.Col span={1}>
                            <CriteriaGradingComponent
                                criteria="Ability to Execute"
                                smallForCriteria="ex"
                                form={form}
                            />
                        </Grid.Col>
                        <Grid.Col span={1}>
                            <CriteriaGradingComponent
                                criteria="Idea"
                                smallForCriteria="id"
                                form={form}
                            />
                        </Grid.Col>
                    </Grid>

                    <Space h="sm" />

                    <TextInput
                        required
                        label="Overall comment"
                        placeholder="Add your comment here"
                        {...form.getInputProps('overall_debrief')}
                    />

                    <Space h="sm" />

                    <Group position="center">
                        <Button
                            color="red"
                            onClick={() => {
                                form.reset();
                                setOpenForm(false);
                            }}
                        >
                            Cancel
                        </Button>

                        <Button
                            color="green"
                            type="submit"
                        >
                            Create
                        </Button>
                    </Group>
                </form>
            </Collapse>
        </div>
    )
}

export default AddReview;