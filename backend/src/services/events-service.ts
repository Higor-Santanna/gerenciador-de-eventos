import prismaClient from "../prisma";
import { EventsType, EventsId} from "../types/types";

class GetEventsService{
    async execute(){
        const getEvents = await prismaClient.events.findMany();
        return getEvents;
    }
}

class CreateEventsService{
    async execute({name, description, startTime, endTime, numberOfDays, local}: EventsType){
        if(!name || !description || !startTime || !endTime || !local){
            throw new Error("Preencha todos os campos")
        };

        const event = await prismaClient.events.create({
            data: {
                name,
                description,
                numberOfDays: numberOfDays !== undefined ? Number(numberOfDays) : null,
                startTime,
                endTime,
                local
            }
        });
        
        return event
    }
}

class UpdateEventsService{
    async execute(id: string, data: Partial<EventsType>) {
        if (!id) {
            throw new Error("ID do evento é obrigatório");
        }

        console.log("Verificando se o evento existe...");
        const eventExists = await prismaClient.events.findUnique({
            where: { id }
        });

        if (!eventExists) {
            throw new Error("Evento não encontrado");
        }

        console.log("Atualizando evento...");
        const updatedEvent = await prismaClient.events.update({
            where: { id },
            data
        });
        console.log("Evento atualizado com sucesso:", updatedEvent);

        return updatedEvent;
    }
}

class DeleteEventsService{
    async execute({ id }: EventsId){
        if(!id){
            throw new Error("Solicitação invalida")
        };

        const findEvents = await prismaClient.events.findFirst({
            where:{
                id: id
            }
        });

        if(!findEvents){
            throw new Error("Cliente não existe!")
        };

        await prismaClient.events.delete({
            where:{
                id: findEvents.id
            }
        });
    };
}

export { CreateEventsService, GetEventsService, DeleteEventsService, UpdateEventsService }