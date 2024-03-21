import { Router } from "express";
import IssueRoutes from "./IssueRoutes"; // Import the default export

// Initialization
const routes = Router();

// Requests
routes.use("/issues", IssueRoutes);

export default routes;
