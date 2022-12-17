import {Global} from "@mantine/core";

import bold from "./fonts/Quicksand-Bold.woff";
import bold2 from "./fonts/Quicksand-Bold.woff2";

import semiBold from "./fonts/Quicksand-SemiBold.woff";
import semiBold2 from "./fonts/Quicksand-SemiBold.woff2";

import medium from "./fonts/Quicksand-Medium.woff";
import medium2 from "./fonts/Quicksand-Medium.woff2";

import regular from "./fonts/Quicksand-Regular.woff";
import regular2 from "./fonts/Quicksand-Regular.woff2";

import light from "./fonts/Quicksand-Light.woff";
import light2 from "./fonts/Quicksand-Light.woff2";


const fonts = [
    {
        '@font-face ': {
            'font-family ': 'Quicksand',
            'src ': `url('${bold2}') format('woff2'), url('${bold}') format('woff')`,
            'font-weight ': "bold",
            'font-style ': "normal",
            'font-display ': "swap",
        }
    },

    {
        '@font-face ': {
            'font-family ': 'Quicksand',
            'src ': `url('${semiBold2}') format('woff2'), url('${semiBold}') format('woff')`,
            'font-weight ': 500,
            'font-style ': "normal",
            'font-display ': "swap",
        }
    },

    {
        '@font-face ': {
            'font-family ': 'Quicksand',
            'src ': `url('${medium2}') format('woff2'), url('${medium}') format('woff')`,
            'font-weight ': 600,
            'font-style ': "normal",
            'font-display ': "swap",
        }
    },

    {
        '@font-face ': {
            'font-family ': 'Quicksand',
            'src ': `url('${regular2}') format('woff2'), url('${regular}') format('woff')`,
            'font-weight ': "normal",
            'font-style ': "normal",
            'font-display ': "swap",
        }
    },

    {
        '@font-face': {
            'font-family ': 'Quicksand',
            'src ': `url('${light2}') format('woff2'), url('${light}') format('woff')`,
            'font-weight ': 300,
            'font-style ': "normal",
            'font-display ': "swap",
        }
    }

]


export default function CustomFonts() {

    return (
        <Global styles={fonts}/>
    )
}
