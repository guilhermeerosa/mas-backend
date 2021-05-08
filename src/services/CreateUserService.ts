import { hash } from "bcryptjs";
import { Response } from "express";
import { getRepository } from "typeorm"
import { User } from "../models/User"

interface UserData {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {

    public async execute({name, email, password}: UserData, response: Response){

        const usersRepository = getRepository(User);

        const checkUserExist = await usersRepository.findOne({email});

        if (checkUserExist) {
            // return {
            //     error: "This email already exist"
            // }

            return response.status(400).send({message: "This email already exist"});

        }

        const hashedPassword = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            password: hashedPassword
        });

        await usersRepository.save(user);

        return user;

    }
}

export { CreateUserService }