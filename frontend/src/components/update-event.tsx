import { useState } from "react";
import { useUpdateEvent } from "../hooks/events";

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
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const updatedEvent = await handleUpdateEvent(event.id, eventData);

        if (updatedEvent) {
            alert("Evento atualizado com sucesso!");
        }
    }

    return (
        <>
            <h1>formulário do update de evento.</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={eventData.name} onChange={handleChange} required />
                <textarea name="description" value={eventData.description} onChange={handleChange} required />
                <input type="number" name="numberOfDays" value={eventData.numberOfDays} onChange={handleChange} required />
                <input type="text" name="startTime" value={eventData.startTime} onChange={handleChange} required />
                <input type="text" name="endTime" value={eventData.endTime} onChange={handleChange} required />
                <textarea name="local" value={eventData.local} onChange={handleChange} required />
                <button type="submit">Salvar Alterações</button>
            </form>
        </>
    )
};

export { UpdateEvent }