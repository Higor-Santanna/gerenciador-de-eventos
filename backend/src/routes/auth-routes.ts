import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { LoginController } from "../controllers/login-controller";

const authRoutes = (fastify: FastifyInstance, option: FastifyPluginOptions) => {
    fastify.post("/login", async (request: FastifyRequest, reply: FastifyReply) => {
        return new LoginController().handle(request, reply)
    });
};

export { authRoutes }