import { Request, Response } from "express";
import IssueServices from "../services/IssueServices";

class IssueController {
  public get(req: Request, res: Response): void {
    const books = IssueServices.get();
    res.json(books);
  }

  public getById(req: Request, res: Response): void {
    const { id } = req.params;
    const book = IssueServices.getById({ id: Number(id) });
    res.json(book);
  }

  public create(req: Request, res: Response): void {
    const book = IssueServices.create({ body: req.body });
    res.json(book);
  }

  public update(req: Request, res: Response): void {
    const { id } = req.params;
    const book = IssueServices.update({ id: Number(id), body: req.body });
    res.json(book);
  }

  public delete(req: Request, res: Response): void {
    const { id } = req.params;
    const book = IssueServices.delete({ id: Number(id) });
    res.json(book);
  }
}

export default new IssueController();
