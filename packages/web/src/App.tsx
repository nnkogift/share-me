import './App.css'
import {MantineProvider, Title} from "@mantine/core";
import CustomFonts from "./shared/components/CustomFonts";


const theme = {
    white: "#F5F7F3",
    fontFamily: "Quicksand, sans-serif",
    headings: {
        fontFamily: "Quicksand, sans-serif"
    }
}

function App() {
    return (
        <MantineProvider theme={theme}>
            <CustomFonts/>
            <div className="App">

                <Title>Share me</Title>

            </div>
        </MantineProvider>
    )
}

export default App
