import {defineConfig} from 'vite'
import path = require("path");


export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            fileName: "index",
            formats: ['cjs']
        },
    }
});
