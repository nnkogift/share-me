import express from "express";
import {ParseServer} from 'parse-server';
import ParseDashboard from 'parse-dashboard';
import {config as configEnv} from "dotenv";



configEnv();

const app = express();

const api = new ParseServer({
    databaseURI: process.env.DATABASE_URI,
    appId: process.env.APP_ID,
    masterKey: process.env.MASTER_KEY,
    serverURL: process.env.SERVER_URL,
    cloud: "./src/cloud/main.ts"
})

const dashboard = new ParseDashboard({
    apps: [
        {
            serverURL: process.env.SERVER_URL,
            appId: process.env.APP_ID,
            masterKey: process.env.MASTER_KEY,
            appName: process.env.APP_NAME
        }
    ]
})


app.use("/api", api);
app.use("/dashboard", dashboard);

app.listen(process.env.PORT ?? 3001, function () {
    console.info(`Parse server & dashboard started at port ${process.env.PORT ?? 3001}`)
})



