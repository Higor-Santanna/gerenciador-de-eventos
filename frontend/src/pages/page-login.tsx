import { useLogin } from "../hooks/use-login"

const PageLogin = () => {
    const { emailRef, passwordRef, handleSubmit } = useLogin();

    return(
        <>
            <h1>Eventos TokenLab</h1>

            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" placeholder="Digite seu email..." ref={emailRef}></input>

                <label>Senha:</label>
                <input type="password" placeholder="Digite sua senha..." ref={passwordRef}></input>

                <input type="submit" value="Login"/>
            </form>

            <a href="">Não possui conta! Faça a sua agora mesmo</a>
        </>
    )
}

export { PageLogin }