import { useGetEvents, useDeleteEvent } from "../hooks/events";
import { useNavigate } from "react-router-dom";
import { EventListContainer, ButtonTrash, ButtonEdit, AnyEvents, CreatorSpan} from "../pages/get-all-events-style";

const GetAllEvents = () => {
    const { allEvents, setAllEvents} = useGetEvents();
    const { handleDeleteEvent } = useDeleteEvent(setAllEvents);
    const navigate = useNavigate();

    const editEvent = (eventId: string) => {
        navigate(`/home/atualizar-evento/${eventId}`); // Navega para a página de atualização
    };

    const deleteEvent = (eventId: string) => {
        handleDeleteEvent(eventId)
    }
    return(
        <EventListContainer>
            <ul>
                {allEvents.length > 0 ? (
                    allEvents.map((event) => (
                        <li key={event.id}>
                            <h2>{event.name}</h2>
                            <p><strong>Descrição:</strong> {event.description}</p>
                            <p><strong>Início do Evento:</strong> {event.startTime}</p>
                            <p><strong>Fim do Evento:</strong> {event.endTime}</p>
                            <p><strong>Quantidade de dias do Evento:</strong> {event.numberOfDays}</p>
                            <p><strong>Local:</strong> {event.local}</p>
                            <CreatorSpan><strong>Criado por:</strong> {event.createdBy?.nameUser}</CreatorSpan>
                            <br></br>
                            <ButtonEdit onClick={() => editEvent(event.id)}>Editar</ButtonEdit>
                            <ButtonTrash onClick={() => deleteEvent(event.id)}>
                                <i className="fa-solid fa-trash"></i>
                            </ButtonTrash>
                        </li> 
                    ))
                ) : (
                    <AnyEvents>Nenhum evento encontrado.</AnyEvents>
                )}
            </ul>
        </EventListContainer>
    )
};

export { GetAllEvents }