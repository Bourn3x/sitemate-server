import { Request, Response } from "express";
import IssueServices from "../services/IssueServices";

class IssueController {
  public get(req: Request, res: Response): void {
    const issues = IssueServices.get();
    res.json(issues);
  }

  public getById(req: Request, res: Response): void {
    const { id } = req.params;
    const issue = IssueServices.getById({ id: Number(id) });
    res.json(issue);
  }

  public create(req: Request, res: Response): void {
    const issue = IssueServices.create({ body: req.body });
    res.json(issue);
  }

  public update(req: Request, res: Response): void {
    const { id } = req.params;
    const issue = IssueServices.update({ id: Number(id), body: req.body });
    res.json(issue);
  }

  public delete(req: Request, res: Response): void {
    const { id } = req.params;
    const deleted = IssueServices.delete({ id: Number(id) });
    res.json({ Deleted: deleted });
  }
}

export default new IssueController();
