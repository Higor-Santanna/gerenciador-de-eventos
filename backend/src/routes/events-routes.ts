import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateEventsController, GetEventsController, DeleteEventsController, UpdateEventsController} from "../controllers/events-controller";
import { authMiddleware } from "../middleware/authMiddleware";

const eventRoutes = async (fastify: FastifyInstance, option: FastifyPluginOptions) => {
    fastify.get("/events", {preHandler: authMiddleware }, async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetEventsController().handle(request, reply)
    });

    fastify.post("/events", { preHandler: authMiddleware }, async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateEventsController().handle(request, reply)
    });

    fastify.put("/events/:id", { preHandler: authMiddleware }, async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateEventsController().handle(request, reply);
    });

    fastify.delete("/events/:id", { preHandler: authMiddleware }, async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteEventsController().handle(request, reply)
    });
};

export { eventRoutes }