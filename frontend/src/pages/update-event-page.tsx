import { useParams } from "react-router-dom";
import { UpdateEvent } from "../components/update-event";
import { useGetEvents } from "../hooks/events";

const UpdateEventPage = () => {
    const { eventId } = useParams<{ eventId: string }>(); // Obtém o eventId da URL
    const { allEvents } = useGetEvents();

    const eventToUpdate = allEvents.find(event => event.id === eventId); // Encontra o evento baseado no ID

    if (!eventToUpdate) {
        return <p>Evento não encontrado.</p>;
    }

    return (
        <>
            <h1>Página de Atualizar Evento</h1>
            <UpdateEvent event={eventToUpdate} /> {/* Passa o evento para o componente de atualização */}
        </>
    );
};

export { UpdateEventPage };
