import { FastifyRequest,  FastifyReply } from "fastify";
import { CreateEventsService, GetEventsService, DeleteEventsService } from "../services/events-service";
import { EventsType, EventsDelete } from "../types/types";

class GetEventsController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const getEventService = new GetEventsService();

        const getEvents = await getEventService.execute();

        reply.send(getEvents);
    }
}

class CreateEventsController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { name, description, startTime, endTime, status } = request.body as EventsType

        const eventsService = new CreateEventsService();
        const events = await eventsService.execute({ name, description, startTime, endTime, status } as EventsType);
        reply.send(events)
    }
}

class UpdateEventsController{
    
}

class DeleteEventsController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.body as EventsDelete

        const deleteEvent = new DeleteEventsService();
        const eventDelete = await deleteEvent.execute({ id });

        reply.send(eventDelete);
    }
}

export { CreateEventsController, GetEventsController, DeleteEventsController}