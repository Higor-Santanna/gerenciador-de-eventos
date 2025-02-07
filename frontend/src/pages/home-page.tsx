import { GetAllEvents } from "../components/get-all-events";
import { useLogout } from "../hooks/use-logout";
import { useLogin } from "../hooks/user-login";
import { HeaderContainer, WelcomeTitle, AddEventButton} from "../styles/homePage-style";

const HomePage = () => {
    const { handleLogout } = useLogout();
    const { user } = useLogin();
    
    return(
        <>
            <HeaderContainer>
                <div>
                    <i className="fa-brands fa-brave"></i>
                    <p>Eventos TokenLab</p>
                </div>
                <button onClick={handleLogout}>
                    <i className="fa-solid fa-right-from-bracket"></i>
                    Sair
                </button>
            </HeaderContainer>
            <WelcomeTitle>Bem vindo, {user?.nameUser || "Usuário"}! Aqui estão seus eventos</WelcomeTitle>
            
            <AddEventButton>
                <a href="/home/adicionar-evento">
                    <i className="fa-regular fa-plus"></i>
                    Adicionar Evento
                </a>
            </AddEventButton>
            <GetAllEvents />
        </>
    )
};

export { HomePage }