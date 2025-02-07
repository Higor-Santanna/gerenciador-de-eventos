import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { GetUserController, CreateUserController, UserController } from "../controllers/user-controller";
import { authMiddleware } from "../middleware/authMiddleware";

const userRoutes  = async (fastify: FastifyInstance, option: FastifyPluginOptions) => {
    fastify.get("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetUserController().handle(request, reply)
    });

    fastify.get("/user/:id", {preHandler: authMiddleware }, async (request: FastifyRequest, reply: FastifyReply) => {
        return new UserController().handle(request, reply)
    });

    fastify.post("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply)
    });
};

export { userRoutes }