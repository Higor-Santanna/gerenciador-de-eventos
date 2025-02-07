import { FormLogin } from "../components/form-login";
import { LoginContainer, Div } from "../styles/page-login-style";

const PageLogin = () => {
    return(
        <LoginContainer>
            <Div>
                <i className="fa-brands fa-brave"></i>
                <h1>Eventos TokenLab</h1>
            </Div>
            <FormLogin />
            <a href="/cadastro">Não possui conta! Faça a sua agora mesmo</a>
        </LoginContainer>
    )
}

export { PageLogin }