import { SimpleGrid, Slider, TextInput, Title } from "@mantine/core";

interface CriteriaGradingProps {
    criteria: string;
    smallForCriteria: string;
    form: any;
}

const CriteriaGradingComponent = ({ criteria, smallForCriteria, form } : CriteriaGradingProps) : JSX.Element => {
    return (
        <SimpleGrid cols={1}>
            <Title order={4}>
                {criteria} : {form.values[`${smallForCriteria}_score`]}/5
            </Title>

            <Slider
                showLabelOnHover={false}
                min={0}
                max={5}
                precision={1}
                step={0.1}
                {...form.getInputProps(`${smallForCriteria}_score`)}
            />

            <TextInput
                required
                label="Comment"
                placeholder={`Add your comment about ${criteria} here`}
                {...form.getInputProps(`${smallForCriteria}_debrief`)}

            />
        </SimpleGrid>
    )
}

export default CriteriaGradingComponent;