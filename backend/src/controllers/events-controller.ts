import { FastifyRequest,  FastifyReply } from "fastify";
import { CreateEventsService, GetEventsService, DeleteEventsService, UpdateEventsService } from "../services/events-service";
import { EventsType, EventsId } from "../types/types";
import { AuthenticatedRequest } from "../services/events-service";

class GetEventsController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const getEventService = new GetEventsService();//instancia

        const getEvents = await getEventService.execute();//busca

        reply.send(getEvents);//retorna
    }
}

class CreateEventsController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { name, description, startTime, endTime, numberOfDays, local } = request.body as EventsType

        const eventsService = new CreateEventsService();

        const events = await eventsService.execute({ name, description, startTime, endTime, numberOfDays, local } as EventsType, request as AuthenticatedRequest);
        reply.send(events)
    }
}

class UpdateEventsController{
    async handle(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = request.params as EventsId;
            const data = request.body as Partial<EventsType>;

            const updateEventService = new UpdateEventsService();
            const updatedEvent = await updateEventService.execute(id, data);

            return reply.send(updatedEvent);
        } catch (error) {
            console.error("Erro ao atualizar evento:", error);
            return reply.status(500).send({ message: "Erro ao atualizar evento", error});
        }
    }
}

class DeleteEventsController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.params as EventsId

        const deleteEvent = new DeleteEventsService();
        const eventDelete = await deleteEvent.execute({ id });

        reply.send(eventDelete);
    }
}

export { CreateEventsController, GetEventsController, DeleteEventsController, UpdateEventsController}