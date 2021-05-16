import {Request, Response, Router} from 'express';
import { ActivyController } from './controller/ActivyController';
import { CourseUnitController } from './controller/CourseUnitController';
import { UserController } from './controller/UserController';

const userController = new UserController();
const activyController = new ActivyController();
const courseUnitController = new CourseUnitController();

const routes = Router();

routes.post('/user/new', userController.create);
routes.post('/activy/new', activyController.create);
routes.post('/course-unit/new', courseUnitController.create);

export default routes;