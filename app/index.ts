import express, { Application } from "express";
import { Server } from "http";

import home from "./src/routes";

const app: Application = express();

app.use("/", home);

const port: number = Number(process.env.PORT || 3000);

const server: Server = app.listen(port, () => console.log(`🚀 on ${port}`));
