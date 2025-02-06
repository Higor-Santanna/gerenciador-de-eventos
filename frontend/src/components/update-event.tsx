import { useState } from "react";
import { useUpdateEvent } from "../hooks/events";
import { FormContainerAddUpdate } from "../styles/add-update-event-style";

interface EditEventProps {
    event: {
        id: string;
        name: string;
        description: string;
        numberOfDays: number;
        startTime: string;
        endTime: string;
        local: string;
    };
}

const UpdateEvent = ({ event }: EditEventProps) => {
    const { handleUpdateEvent } = useUpdateEvent();

    const [eventData, setEventData] = useState({
        name: event.name,
        description: event.description,
        numberOfDays: event.numberOfDays,
        startTime: event.startTime,
        endTime: event.endTime,
        local: event.local
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;

        setEventData({
            ...eventData,
            [name]: name === "numberOfDays" ? Number(value) : value, // Converte para número se for numberOfDays
        });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        console.log("Enviando os seguintes dados:", eventData);

        const updatedEvent = await handleUpdateEvent(event.id, eventData);

        if (updatedEvent) {
            console.log("Evento atualizado no frontend:", updatedEvent); 
            alert("Evento atualizado com sucesso!");
        }
    }

    return (
        <>
            <FormContainerAddUpdate>
                <form onSubmit={handleSubmit}>
                    <h1>Editar Evento</h1>

                    <label>Nome:</label>
                    <input type="text" name="name" value={eventData.name} onChange={handleChange} required />

                    <label>Descrição do Evento:</label>
                    <textarea name="description" value={eventData.description} onChange={handleChange} required />

                    <label>Número de dias do Evento:</label>
                    <input type="number" name="numberOfDays" value={eventData.numberOfDays} onChange={handleChange} required />

                    <label>Horário de Início:</label>
                    <input type="text" name="startTime" value={eventData.startTime} onChange={handleChange} required />

                    <label>Horário Final:</label>
                    <input type="text" name="endTime" value={eventData.endTime} onChange={handleChange} required />

                    <label>Local do Evento:</label>
                    <textarea name="local" value={eventData.local} onChange={handleChange} required />
                    <button type="submit">Salvar Alterações</button>
                </form>
            </FormContainerAddUpdate>
        </>
    )
};

export { UpdateEvent }