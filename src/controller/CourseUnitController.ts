import { Request, Response } from "express";
import { CreateCourseUnitService } from "../services/CreateCourseUnitService"

class CourseUnitController {
    async create(req: Request, res: Response) {
        const courseUnitData = req.body;

        const createCourseUnit = new CreateCourseUnitService();

        const courseUnit = await createCourseUnit.execute(courseUnitData);

        return res.json(courseUnit)
    }
}

export { CourseUnitController }