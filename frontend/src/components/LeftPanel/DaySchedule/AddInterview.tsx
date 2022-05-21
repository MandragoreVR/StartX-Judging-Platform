import { Button, Group, Popover, Space, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { DatePicker } from "@mantine/dates";
import { useState } from "react";
import { Plus } from "tabler-icons-react";
import { dateToString } from "../../../utils";

interface AddInterviewProps {
    addInterview: (agr0: {company: string, date: string}) => void;
}

const AddInterview = ({ addInterview } : AddInterviewProps) : JSX.Element => {
    const [ openForm, setOpenForm ] = useState<boolean>(false);

    const form = useForm<{ company: string; date: Date }>({
        initialValues: {
            company: '',
            date: new Date()
        },
        validate: {
            company: (value) => value.length <= 100 ? null : "Company name is too long",
            date: (value) => {
                const today = new Date();
                if (value >= today || (
                    value.getDate() === today.getDate() &&
                    value.getMonth() === today.getMonth() &&
                    value.getFullYear() === today.getFullYear()
                )) return null;
                else return "Select a future date"
            }
        }
    })
    return (
        <div>
            <Popover
                opened={openForm}
                onClose={() => setOpenForm(false)}
                position="top"
                placement="center"
                withArrow
                closeOnEscape={false}
                transition="pop-top-left"
                closeOnClickOutside={false}
                target={
                    <Plus
                        cursor="pointer"
                        onClick={() => setOpenForm(true)}
                    />
                }
            >
                <form onSubmit={form.onSubmit((values) => {
                    form.reset();
                    addInterview({
                        company: values.company,
                        date: dateToString(values.date)
                    })
                    setOpenForm(false);
                })}>
                    <TextInput
                        required
                        label="Company name"
                        placeholder="StartX"
                        {...form.getInputProps('company')}
                    />

                    <Space h="sm" />

                    <DatePicker
                        required
                        label="Date of the interview"
                        placeholder={new Date().toDateString()}
                        {...form.getInputProps('date')}
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
            </Popover>
        </div>
    )
}

export default AddInterview;