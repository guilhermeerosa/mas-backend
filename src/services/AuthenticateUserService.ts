import { compare } from "bcryptjs";
import { getRepository } from "typeorm";
import { User } from "../models/User";
import AuthConfig from "../config/auth";
import { sign } from "jsonwebtoken";


interface AuthData {
    email: string;
    password: string;
}

class AuthenticadeUserService {
    public async execute({email, password}: AuthData) {

        const userRepository = getRepository(User);

        const user = await userRepository.findOne({email});

        if (!user) {
            return {
                error: "user not find"
            }
        }

        const comparePassword = compare(password, user.password);

        if (!comparePassword) {
            return {
                error: "Incorrect password"
            }
        }

        const {privateKey, expiresIn} = AuthConfig.jwt;

        const token = sign({"role":"user"}, privateKey, {
            algorithm: 'RS256',
            subject: user.id,
            expiresIn
        });

        return token;
    }

}

export { AuthenticadeUserService }