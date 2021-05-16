import { getRepository } from "typeorm";
import { CourseUnit } from "../models/CourseUnit";

interface CourseUnitData {
    name: string;
    description: string;
}

class CreateCourseUnitService {

    public async execute({name, description}: CourseUnitData){

        const courseUnitRepository = getRepository(CourseUnit);

        const checkCourseUnitExist = await courseUnitRepository.findOne({name});

        if (checkCourseUnitExist) {
            throw new Error('This course unit already exist')
        }

        const courseUnit = courseUnitRepository.create({
            name,
            description
        });

        await courseUnitRepository.save(courseUnit);
        
        return courseUnit;
    }
}

export { CreateCourseUnitService }