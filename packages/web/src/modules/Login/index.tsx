import {Button, Card, Divider, Title, useMantineTheme} from "@mantine/core";
import {useForm} from "react-hook-form";
import LoginForm from "./components/Form";
import classes from "./Login.module.css"
import WhiteLogo from "../../assets/icon-white.png"
import {IconBrandFacebook, IconBrandGoogle} from '@tabler/icons';

export default function Login() {
    const {colors} = useMantineTheme()
    const form = useForm();


    return (
        <div style={{background: colors.blue[9]}} className=" column w-100 h-100">
            <div className="p-16">
                <img src={WhiteLogo} height={64}/>
            </div>
            <div className="column center align-center" style={{flex: 1}}>
                <div className={classes.loginArea}>
                    <Card style={{minHeight: "40vh", maxHeight: "80vh", minWidth: "30%"}} withBorder>
                        <div className="column gap-16 align-center">
                            <Title size="h3">
                                Login
                            </Title>
                            <LoginForm/>
                            <Button>Login</Button>
                            <Divider size="sm" my="xs" label="OR" labelPosition="center"/>
                            <div className="column gap-16">
                                <Button leftIcon={<IconBrandGoogle size={18}/>}>Login with google </Button>
                                <Button leftIcon={<IconBrandFacebook size={18}/>}>Login with facebook </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
