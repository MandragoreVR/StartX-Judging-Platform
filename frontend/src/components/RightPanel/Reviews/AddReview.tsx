import { Button, Collapse, Grid, Group, Space, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Review } from "../../../data/types";
import { useSelectedInterview } from "../../../contexts";
import CriteriaGradingComponent from "./CriteriaGradingComponent";
import { dateToString } from "../../../utils";

interface AddReviewProps {
    addReview: (agr0: Review) => void;
    openForm: boolean;
    setOpenForm: (arg0: boolean) => void;
}

const AddReview = ({ addReview, openForm, setOpenForm } : AddReviewProps) : JSX.Element => {
    const { selectedInterview } = useSelectedInterview();

    const form = useForm<Review>({
        initialValues: {
            interviewId: selectedInterview ? selectedInterview.id : 0,
            judgeName: '',
            pcScore: 2.5,
            pcDebrief: '',
            tdScore: 2.5,
            tdDebrief: '',
            exScore: 2.5,
            exDebrief: '',
            idScore: 2.5,
            idDebrief: '',
            overallDebrief: '',
            publicationDate: dateToString(new Date())
        },
        validate: {
            judgeName: (value) => value.length <= 100 ? null : "Name is too long",
            pcDebrief: (value) => value.length <= 500 ? null : "Comment must not exceed 500 characters",
            tdDebrief: (value) => value.length <= 500 ? null : "Comment must not exceed 500 characters",
            exDebrief: (value) => value.length <= 500 ? null : "Comment must not exceed 500 characters",
            idDebrief: (value) => value.length <= 500 ? null : "Comment must not exceed 500 characters",
            overallDebrief: (value) => value.length <= 500 ? null : "Overall comment must not exceed 500 characters",
        }
    })
    return (
        <div>
            <Collapse in={openForm}>
                <form onSubmit={form.onSubmit((values) => {
                    form.reset();
                    addReview({
                        ...form.values
                    })
                    setOpenForm(false);
                })}>
                    <TextInput
                        style={{ width: "50%" }}
                        required
                        label="Judge name"
                        placeholder="John Doe"
                        {...form.getInputProps('judgeName')}
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
                        {...form.getInputProps('overallDebrief')}
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