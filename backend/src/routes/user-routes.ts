import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { GetUserController, CreateUserController } from "../controllers/user-controller";
import { authMiddleware } from "../middleware/authMiddleware";

const userRoutes  = async (fastify: FastifyInstance, option: FastifyPluginOptions) => {
    fastify.get("/user", { preHandler: authMiddleware },async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetUserController().handle(request, reply)
    });

    fastify.post("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply)
    });
};

export { userRoutes }