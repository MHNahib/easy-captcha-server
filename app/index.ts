import express, { Application } from "express";
import { Server } from "http";

import home from "./src/routes";
import { notFoundHandler } from "./src/middleware";

const app: Application = express();

app.use("/", home);

app.use(notFoundHandler);

const port: number = Number(process.env.PORT || 3000);

const server: Server = app.listen(port, () => console.log(`🚀 on ${port}`));
