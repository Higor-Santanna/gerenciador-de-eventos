import { useAddEvent } from "../hooks/events";
import { FormContainerAddUpdate } from "../styles/add-update-event-style";

const AddEvent = () => {
    const { handleAddEvent, nameRef, descriptionRef, numberOfDaysRef, startTimeRef, endTimeRef, localRef } = useAddEvent();

    return (
        <>
            <FormContainerAddUpdate>
                <form onSubmit={handleAddEvent}>
                    <h1>Adicionar um novo Evento</h1>
                    <label>Nome:</label>
                    <input type="name" placeholder="Digite o nome do evento..." ref={nameRef}></input>
                    <br></br>

                    <label>Descrição do Evento:</label>
                    <textarea placeholder="Digite a descrição do evento..." ref={descriptionRef}></textarea>
                    <br></br>
                    <label>Número de dias do Evento:</label>
                    <input type="number" placeholder="Quantidade de dias que ocorrerá o evento..." ref={numberOfDaysRef}></input>
                    <br></br>

                    <label>Horário de Início:</label>
                    <input type="time" placeholder="Que horas que começa o evento..." ref={startTimeRef}></input>
                    <br></br>

                    <label>Horário Final:</label>
                    <input type="time" placeholder="Que horas termina o evento" ref={endTimeRef}></input>
                    <br></br>

                    <label>Local do Evento:</label>
                    <textarea placeholder="Digite onde acontecerá o evento..." ref={localRef}></textarea>
                    <br></br>
                    <input type="submit" value="Adicionar Evento" />
                </form>
            </FormContainerAddUpdate>
        </>
    )
};

export { AddEvent }