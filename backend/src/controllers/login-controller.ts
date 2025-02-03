import { FastifyRequest, FastifyReply } from "fastify";
import { LoginService } from "../services/login-service";
import { UserType } from "../types/types";

class LoginController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { email, password } = request.body as UserType;

        const loginService = new LoginService();
        const result = await loginService.execute({email, password} as UserType);

        reply.send(result);
    }
}

export { LoginController };