import {Request, Response, Router} from 'express';
import { ActivyController } from './controller/ActivyController';
import { AuthenticadeController } from './controller/AuthenticateController';
import { CourseUnitController } from './controller/CourseUnitController';
import { UserController } from './controller/UserController';
import authenticated from './middlewear/authenticated';

const userController = new UserController();
const authenticadeController = new AuthenticadeController()
const activyController = new ActivyController();
const courseUnitController = new CourseUnitController();

const routes = Router();

routes.get('/user', authenticated, userController.show);
routes.post('/user/new', userController.create);

routes.post('/auth/new', authenticadeController.create)

routes.get('/activy', authenticated, activyController.show)
routes.post('/activy/new', authenticated, activyController.create);

routes.get('/course-unit', authenticated, courseUnitController.show)
routes.post('/course-unit/new', authenticated, courseUnitController.create);

export default routes;