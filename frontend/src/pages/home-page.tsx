import { GetAllEvents } from "../components/get-all-events";

const HomePage = () => {
    return(
        <>
            <h1>Seus Eventos</h1>
            <a href="/home/adicionar-evento">Adicionar Evento</a>
            <GetAllEvents />
        </>
    )
};

export { HomePage }