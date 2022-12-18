import {MantineProvider} from "@mantine/core";
import CustomFonts from "./shared/components/CustomFonts";
import Login from "./modules/Login";


const theme = {
    fontFamily: "Quicksand, sans-serif",
    headings: {
        fontFamily: "Quicksand, sans-serif"
    }

}

function App() {
    return (
        <MantineProvider theme={theme}>
            <CustomFonts/>
            <Login/>
        </MantineProvider>
    )
}

export default App
