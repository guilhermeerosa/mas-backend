import { getRepository } from "typeorm";
import { Activy } from "../models/Activy";
import { CourseUnit } from "../models/CourseUnit";

interface activyData {
    name: string;
    activy_date: Date;
    course_unit: CourseUnit;
}

class CreateActivyService {

    public async execute({ name, activy_date, course_unit }: activyData) {

        const activiesRepository = getRepository(Activy);

        const checkActivyExist = await activiesRepository.findOne({name, activy_date, course_unit});

        if (checkActivyExist) {
            throw new Error('This activity already exist in this course unit')
        }

        const activy = activiesRepository.create({
            name,
            activy_date,
            course_unit
        });

        await activiesRepository.save(activy);

        return activy;
    }
}

export { CreateActivyService }