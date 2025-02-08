import { useState } from "react";
import { useUpdateEvent } from "../hooks/events";
import { useNavigate } from "react-router-dom";
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
    const { handleUpdateEvent } = useUpdateEvent(); //hook personalizado
    const navigate = useNavigate();

    const [eventData, setEventData] = useState({
        name: event.name,
        description: event.description,
        numberOfDays: event.numberOfDays,
        startTime: event.startTime,
        endTime: event.endTime,
        local: event.local
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target; //name: Nome do campo (input ou textarea), value: Novo valor digitado pelo usuário.

        setEventData({
            ...eventData,
            [name]: name === "numberOfDays" ? Number(value) : value, // Converte para número se for numberOfDays
        }); //essa função atualiza apenas os dados que foram atualizados
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();//evita atualizar o form

        const updatedEvent = await handleUpdateEvent(event.id, eventData);//envia para bd os dados atualizados

        if (updatedEvent) {
            navigate("/evento-atualizado")
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
                    <input type="time" name="startTime" value={eventData.startTime} onChange={handleChange} required />

                    <label>Horário Final:</label>
                    <input type="time" name="endTime" value={eventData.endTime} onChange={handleChange} required />

                    <label>Local do Evento:</label>
                    <textarea name="local" value={eventData.local} onChange={handleChange} required />
                    <button type="submit">Salvar Alterações</button>
                </form>
            </FormContainerAddUpdate>
        </>
    )
};

export { UpdateEvent }