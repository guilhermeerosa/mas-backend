import { Request, Response } from "express";
import { AuthenticadeUserService } from "../services/AuthenticateUserService";

class AuthenticadeController {
    async create( request: Request, response: Response) {
        const authData = request.body;

        const authenticadeUser = new AuthenticadeUserService();

        const auth = await authenticadeUser.execute(authData);

        return response.json(auth);
    }
}

export { AuthenticadeController }