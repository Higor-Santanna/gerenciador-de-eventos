import { useGetEvents } from "../hooks/events";

const GetAllEvents = () => {
    const { allEvents } = useGetEvents();
    
    return(
        <>
            <h2>Eventos</h2>
            <ul>
                {allEvents.length > 0 ? (
                    allEvents.map((event) => (
                        <li key={event.id}>{event.name}</li>
                    ))
                ) : (
                    <p>Nenhum evento encontrado.</p>
                )}
            </ul>
        </>
    )
};

export { GetAllEvents }