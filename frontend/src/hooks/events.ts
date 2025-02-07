import { api } from "../service/api";
import { useEffect, useState, useRef, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface CustomJwtPayload extends JwtPayload {
    id: string; // Definir 'id' como obrigatório
    email: string;
}

interface EventsProps{
    id: string
    name: string
    description: string
    numberOfDays: number
    startTime: string
    endTime: string
    local: string
    createdBy?: {
        nameUser: string;
    };
}

const useGetEvents = () => {
    const [ allEvents, setAllEvents ] = useState<EventsProps[]>([]);

    async function loadEvents() {
        const token = localStorage.getItem("token");
        try {
            const response = await api.get("/events", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            setAllEvents(response.data);
        } catch (error) {
            console.error("Erro ao carregar eventos:", error);
        }
    }

    useEffect(() => {
        loadEvents();
    }, []);

    return { loadEvents, allEvents, setAllEvents }
};

const useAddEvent = () => {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
    const numberOfDaysRef = useRef<HTMLInputElement | null>(null);
    const startTimeRef = useRef<HTMLInputElement | null>(null);
    const endTimeRef = useRef<HTMLInputElement | null>(null);
    const localRef = useRef<HTMLTextAreaElement | null>(null);
    const navigate = useNavigate();

    async function handleAddEvent(event: FormEvent){
        event.preventDefault();
        const token = localStorage.getItem("token"); 

        if (!token) {
            alert("Usuário não autenticado!");
            throw new Error("Token não encontrado!");
        }

        // Forçando o tipo de 'decodedToken' para 'CustomJwtPayload'
        const decodedToken = jwtDecode(token) as CustomJwtPayload;
        console.log("Token decodificado", decodedToken)
        const userId = decodedToken.id; // O TypeScript agora reconhece "id" no token. alteração

        const eventName = nameRef.current?.value || "";

        if(!nameRef.current?.value || !nameRef.current?.value.trim()){
            alert("O nome digitado é inválido ou campo está vazio")
            return;
        };

        const response = await api.get("/events", {
            headers: { Authorization: `Bearer ${token}` }
        });

        const allEvents: EventsProps[] = response.data;
        const eventExists = allEvents.some(event => event.name.toLowerCase() === eventName.toLowerCase());

        if(eventExists) {
            alert("Já existe um evento com esse nome. Escolha outro nome.");
            return;
        }

        if(!descriptionRef.current?.value || !descriptionRef.current?.value.trim()){
            alert("A descrição digitada é inválido ou campo está vazio")
            return;
        };

        if(!numberOfDaysRef.current?.value || !numberOfDaysRef.current?.value.trim() || Number(numberOfDaysRef.current?.value) <= 0){
            alert("O número de dias digitado é inválido ou campo está vazio")
            return;
        };

        if(!nameRef.current?.value || !nameRef.current?.value.trim()){
            alert("O nome digitado é inválido ou campo está vazio")
            return;
        };

        if(!startTimeRef.current?.value || !startTimeRef.current?.value.trim()){
            alert("O horário inicial digitado é inválido ou campo está vazio")
            return;
        };

        if(!endTimeRef.current?.value || !endTimeRef.current?.value.trim()){
            alert("O horário final digitado é inválido ou campo está vazio")
            return;
        };

        if(!localRef.current?.value || !localRef.current?.value.trim()){
            alert("A localização digitada é inválida ou campo está vazio")
            return;
        };

        try {
            await api.post("/events", 
                {
                    name: nameRef.current?.value,
                    description: descriptionRef.current?.value,
                    numberOfDays: numberOfDaysRef.current?.value,
                    startTime: startTimeRef.current?.value,
                    endTime: endTimeRef.current?.value,
                    local: localRef.current?.value,
                    createdById: userId
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            navigate("/evento-criado")
        } catch (error) {
            alert("Erro ao adicionar o novo evento. Verifique suas credenciais.");
            console.error("Erro na adição do evento:", error);
        }
    };

    return { handleAddEvent, nameRef, descriptionRef, numberOfDaysRef, startTimeRef, endTimeRef, localRef }
}

const useUpdateEvent = () => {
    const token = localStorage.getItem("token");

    async function handleUpdateEvent(eventId: string, updatedData: Partial<EventsProps>) {

        try {
            const response = await api.put(`/events/${eventId}`, updatedData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            
            return response.data;
        } catch (error) {
            console.error("Erro ao atualizar evento:", error);
            alert("Erro ao atualizar o evento. Tente novamente.");
            return null;
        }
    }

    return { handleUpdateEvent };
};

const useDeleteEvent = (setAllEvents: React.Dispatch<React.SetStateAction<EventsProps[]>>) => {
    async function handleDeleteEvent(eventId: string) {
        const token = localStorage.getItem("token");

        try {
            await api.delete(`/events/${eventId}`,{
                headers: { Authorization: `Bearer ${token}` }
            });

            setAllEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
        } catch (error) {
            console.error("Erro ao atualizar evento:", error);
            alert("Erro ao atualizar o evento. Tente novamente.");
            return null;
        }
    }

    return { handleDeleteEvent }
}

export { useGetEvents, useAddEvent, useUpdateEvent, useDeleteEvent }