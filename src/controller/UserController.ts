import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class UserController {
    async create(req: Request, res: Response) {
        const userData = req.body;

        const createUser = new CreateUserService();

        const user = await createUser.execute(userData);

        return res.json(user);
    }
}

export { UserController };