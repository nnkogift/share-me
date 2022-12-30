import {MantineProvider, TypographyStylesProvider} from "@mantine/core";
import CustomFonts from "./shared/components/CustomFonts";
import Registration from "./modules/Registration";


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
            <TypographyStylesProvider className="w-100 h-100">
                <Registration/>
            </TypographyStylesProvider>
        </MantineProvider>
    )
}

export default App
