import { useUserRegistration } from "../hooks/user-registration";
import { RegisterContainer, RegisterTitle } from "../styles/page-user-registration-style";
import { BackPage } from "../styles/utils-style";

const PageUserRegistration = () => {
    const { nameRef, emailRef, passwordRef, handleRegistration } = useUserRegistration();

    return (
        <>
            <BackPage>
                <a href="/"><i className="fa-solid fa-arrow-left"></i></a>
            </BackPage>
            <RegisterTitle>Cadastro</RegisterTitle>

            <RegisterContainer>
                <form onSubmit={handleRegistration}>
                    <label>Nome</label>
                    <input type="name" placeholder="Digite seu nome..." ref={nameRef}></input>

                    <label>Email</label>
                    <input type="email" placeholder="Digite seu email..." ref={emailRef}></input>

                    <label>Senha</label>
                    <input type="password" placeholder="Digite sua senha..." ref={passwordRef}></input>

                    <input type="submit" value="Cadastrar" />
                </form>
            </RegisterContainer>
        </>
    )
};

export { PageUserRegistration }