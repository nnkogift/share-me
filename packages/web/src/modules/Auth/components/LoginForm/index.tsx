import {PasswordInput, TextInput} from "@mantine/core";

export default function LoginForm() {

    return (
        <form style={{minWidth: 300}}>
            <TextInput label="Username"/>
            <PasswordInput label="Password"/>
        </form>
    )
}
