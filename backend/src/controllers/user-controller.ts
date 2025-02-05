import { FastifyRequest,  FastifyReply } from "fastify";
import { GetUserService, CreateUserService, Userservice} from "../services/user-service";
import { UserType, UserID } from "../types/types";

class GetUserController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const getUserService = new GetUserService();

        const getUser = await getUserService.execute();

        reply.send(getUser);
    }
};

class UserController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.params as UserID; // Recebendo o ID via params
        const getUserService = new Userservice();

        const getUser = await getUserService.execute(id); // Passando o ID para o serviço
        reply.send(getUser);
    }
}

class CreateUserController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { nameUser, email, password } = request.body as UserType

        const userService = new CreateUserService();
        const user = await userService.execute({ nameUser, email, password } as UserType);
        reply.send(user)
    }
}

export { GetUserController, CreateUserController, UserController}