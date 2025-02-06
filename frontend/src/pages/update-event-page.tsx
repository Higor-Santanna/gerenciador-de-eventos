import { useParams } from "react-router-dom";
import { UpdateEvent } from "../components/update-event";
import { useGetEvents } from "../hooks/events";
import { BackPage } from "../styles/utils-style";

const UpdateEventPage = () => {
    const { eventId } = useParams<{ eventId: string }>(); // Obtém o eventId da URL
    const { allEvents } = useGetEvents();

    const eventToUpdate = allEvents.find(event => event.id === eventId); // Encontra o evento baseado no ID

    if (!eventToUpdate) {
        return <p>Evento não encontrado.</p>;
    }

    return (
        <>
            <BackPage>
                <a href="/home"><i className="fa-solid fa-arrow-left"></i></a>
            </BackPage>
            <UpdateEvent event={eventToUpdate} /> {/* Passa o evento para o componente de atualização */}
        </>
    );
};

export { UpdateEventPage };
