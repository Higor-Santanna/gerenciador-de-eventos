import prismaClient from "../prisma";
import { EventsType, EventsDelete} from "../types/types";

class GetEventsService{
    async execute(){
        const getEvents = await prismaClient.events.findMany();

        return getEvents;
    }
}

class CreateEventsService{
    async execute({name, description, startTime, endTime, numberOfDays}: EventsType){
        if(!name || !description || !startTime || !endTime){
            throw new Error("Preencha todos os campos")
        };

        const event = await prismaClient.events.create({
            data: {
                name,
                description,
                numberOfDays,
                startTime,
                endTime,
                status: true
            }
        });

        return event
    }
}

class UpdateEventsService{
    
}

class DeleteEventsService{
    async execute({ id }: EventsDelete){
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

export { CreateEventsService, GetEventsService, DeleteEventsService }