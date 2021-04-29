import { getRepository } from "typeorm";
import { CourseUnit } from "../models/CourseUnit";

interface CourseUnitData {
    name: string,
    description: string,
}

class CreateCourseUnitService {
    async execute({name, description}: CourseUnitData){
        const courseUnitRepository = getRepository(CourseUnit);

        const courseUnit = courseUnitRepository.create({
            name,
            description
        });

        await courseUnitRepository.save(courseUnit);
        return courseUnit
    }
}

export { CreateCourseUnitService }