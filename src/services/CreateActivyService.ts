import { getRepository } from "typeorm";
import { CourseUnit } from "../models/CourseUnit";
import { Activy } from "../models/Activy";

interface activyData {
    name: string,
    activy_date: Date,
    course_unit: CourseUnit
}

class CreateActivyService {
    async execute({ name, activy_date, course_unit }: activyData) {
        const activyRepository = getRepository(Activy);

        const activy = activyRepository.create({
            name,
            activy_date,
            course_unit
        });

        await activyRepository.save(activy);
        return activy;
    }
}

export { CreateActivyService }