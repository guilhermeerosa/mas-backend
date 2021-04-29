import {Request, Response, Router} from 'express';

const routes = Router();

// routes.get('/user', (request, response) => response.json({
//     message:'Hello World'
// }));

// localhost:3333/user/1
routes.get('/user/:id/', (request: Request, response: Response) => {
    const {id} = request.params;
    response.json({
    userId:id
    })
})

// localhost:3333/user?nome=guilherme&idade=28
routes.get('/user/', (request: Request, response: Response) => {

    const {nome, idade} = request.query

    response.json({
        nome: nome,
        idade: idade
    })
})

routes.post('/user', (request: Request, response: Response) => {

    const {name, email, password} = request.body

    const user = {
    name,
    email,
    password
    }

    return response.json(user);
    })

export default routes;