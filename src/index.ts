// src/index.js
import express, { Express } from "express";
import dotenv from "dotenv";
import routes from "./routes";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
