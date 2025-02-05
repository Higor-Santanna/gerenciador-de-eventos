import { useLogin } from "../hooks/user-login";
import { FormContainer } from "../styles/form-login-style";

const FormLogin = () => {
    const { emailRef, passwordRef, handleSubmit } = useLogin();

    return(
        <>
            <FormContainer onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" placeholder="Digite seu email..." ref={emailRef}></input>

                <label>Senha</label>
                <input type="password" placeholder="Digite sua senha..." ref={passwordRef}></input>

                <input type="submit" value="Login"/>
            </FormContainer>
        </>
    )
};

export { FormLogin }