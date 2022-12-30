import {TextInput} from "@mantine/core";
import {IconMail} from "@tabler/icons"
export default function SignUpForm() {

    return (
        <form style={{minWidth: 300}}>
            <TextInput label="Email" icon={<IconMail size={16} />}/>
        </form>
    )
}
