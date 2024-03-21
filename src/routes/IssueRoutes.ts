import { Router } from "express";
import IssueController from "../controllers/IssueController";

const IssueRoutes = Router();

IssueRoutes.get("/:id", IssueController.getById);
IssueRoutes.get("/", IssueController.get);
IssueRoutes.post("/", IssueController.create);
IssueRoutes.put("/:id", IssueController.update);
IssueRoutes.delete("/:id", IssueController.delete);

export default IssueRoutes;
