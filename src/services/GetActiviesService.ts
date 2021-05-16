import { getRepository } from "typeorm"
import { Activy } from "../models/Activy"

interface UserId {
    id?: string;
}

class GetActiviesService {

    public async execute({ id }: UserId) {

        const activyRepository = getRepository(Activy);

        const activies = activyRepository.find();

        if (!activies) {
            return {
                error: 'activies not found'
            }
        }

        return activies;
    }
}

export { GetActiviesService }