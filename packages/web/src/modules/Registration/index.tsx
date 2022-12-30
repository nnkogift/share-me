import {useCounter} from "@mantine/hooks";
import PersonalDetails from "./components/PersonalDetails";
import WorkDetails from "./components/WorkDetails";
import SocialMedia from "./components/SocialMedia";
import {Button, Container, Group, Stepper} from "@mantine/core";


const steps = [
    {
        id: "personal-details",
        label: "Personal details",
        description: "",
        children: <PersonalDetails/>,
    },
    {
        id: "work-details",
        label: "Work details",
        description: "",
        children: <WorkDetails/>,
    },
    {
        id: "social-media",
        label: "Social Media",
        description: "",
        children: <SocialMedia/>
    }
]


export default function Registration() {
    const [step, {increment, decrement, set}] = useCounter(0);


    return (
        <Container size="xl" className="w-100 h-100">
            <div className="pt-32">
                <Stepper breakpoint="sm" onStepClick={set} active={step}>
                    {
                        steps.map((props) => (<Stepper.Step {...props} key={props.id}/>))
                    }
                </Stepper>
                <Group position="center" mt="xl">
                    <Button variant="default" onClick={decrement}>Back</Button>
                    <Button onClick={increment}>Next step</Button>
                </Group>
            </div>
        </Container>
    )
}
