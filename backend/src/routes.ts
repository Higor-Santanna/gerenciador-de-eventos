import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateEventsController, GetEventsController, DeleteEventsController, UpdateEventsController} from "./controllers/events-controller";

export async function routes(fastify: FastifyInstance, option: FastifyPluginOptions) {
    
    fastify.get("/events", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetEventsController().handle(request, reply)
    });

    fastify.post("/events", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateEventsController().handle(request, reply)
    });

    fastify.put("/events/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateEventsController().handle(request, reply);
    });

    fastify.delete("/events/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteEventsController().handle(request, reply)
    });
};