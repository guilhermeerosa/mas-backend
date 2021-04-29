import { Request, Response } from "express";
import { CreateActivyService } from "../services/CreateActivyService";

class ActivyController {
    async create(req: Request, res: Response) {
        const activyData = req.body;

        const createActivy = new CreateActivyService();

        const activy = await createActivy.execute(activyData);

        return res.json(activy);
    }
}

export { ActivyController }