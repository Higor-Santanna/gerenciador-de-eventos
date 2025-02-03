import { FastifyRequest,  FastifyReply } from "fastify";
import { GetUserService, CreateUserService } from "../services/user-service";
import { UserType } from "../types/types";

class GetUserController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const getUserService = new GetUserService();

        const getUser = await getUserService.execute();

        reply.send(getUser);
    }
};

class CreateUserController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { nameUser, email, password } = request.body as UserType

        const userService = new CreateUserService();
        const user = await userService.execute({ nameUser, email, password } as UserType);
        reply.send(user)
    }
}

export { GetUserController, CreateUserController }