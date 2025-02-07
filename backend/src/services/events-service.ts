import prismaClient from "../prisma";
import { EventsType, EventsId } from "../types/types";
import { FastifyRequest } from "fastify";

export interface AuthenticatedRequest extends FastifyRequest {
    user: {
        id: string;
        email: string;
    };
}

class GetEventsService{
    async execute(){
        const getEvents = await prismaClient.events.findMany({
            include: {
                createdBy: {
                    select: { nameUser: true }, // Inclui o nome do criador do evento
                },
            },
        });
        return getEvents;
    }
}

class CreateEventsService{
    async execute({name, description, startTime, endTime, numberOfDays, local}: EventsType, request: AuthenticatedRequest){

        if (!request.user || !request.user.id) {
            throw new Error("Usuário não autenticado");
        }

        const userId = request.user.id //PEGAO ID DO USUÁRIO

        const numberOfDaysInt = Number(numberOfDays) || 0; //GARANTE QUE O BD RECEBE UM NÚMERO

        if(!name || !description || !startTime || !endTime || !local){
            throw new Error("Preencha todos os campos")
        };

        const event = await prismaClient.events.create({
            data: {
                name,
                description,
                numberOfDays: numberOfDaysInt,
                startTime,
                endTime,
                local,
                createdById: userId,
            },
            include: {
                createdBy: {
                    select: { nameUser: true }, // Retorna o nome do criador
                },
            },
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