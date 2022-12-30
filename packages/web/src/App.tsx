import {MantineProvider, TypographyStylesProvider} from "@mantine/core";
import CustomFonts from "./shared/components/CustomFonts";
import AuthPage from "./modules/Auth";


const theme = {
    fontFamily: "Quicksand, sans-serif",
    headings: {
        fontFamily: "Quicksand, sans-serif"
    }

}

function App() {
    return (
        <MantineProvider theme={theme}>
            <TypographyStylesProvider className="w-100 h-100">

                <CustomFonts/>
                <AuthPage/>
            </TypographyStylesProvider>
        </MantineProvider>
    )
}

export default App
