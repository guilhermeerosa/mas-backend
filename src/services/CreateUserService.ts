import { getRepository } from 'typeorm';
import { User } from '../models/User';

interface UserData {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, password }: UserData) {
        const userRepository = getRepository(User);

        const user = userRepository.create({
            name,
            email,
            password
        });

        await userRepository.save(user);
        return user;
    }
}

export { CreateUserService };