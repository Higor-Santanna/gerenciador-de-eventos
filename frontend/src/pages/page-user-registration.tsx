import { useUserRegistration } from "../hooks/user-registration";

const PageUserRegistration = () => {
    const { nameRef, emailRef, passwordRef, handleRegistration } = useUserRegistration();

    return(
        <>
            <h1>Cadastro</h1>

            <form onSubmit={handleRegistration}>
                <label>Nome:</label>
                <input type="name" placeholder="Digite seu nome..." ref={nameRef}></input>

                <label>Email:</label>
                <input type="email" placeholder="Digite seu email..." ref={emailRef}></input>

                <label>Senha:</label>
                <input type="password" placeholder="Digite sua senha..." ref={passwordRef}></input>

                <input type="submit" value="Registration"/>
            </form>
        </>
    )
};

export { PageUserRegistration }