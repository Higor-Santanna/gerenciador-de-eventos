import { useUserRegistration } from "../hooks/user-registration";
import { RegisterContainer, RegisterTitle } from "../styles/page-user-registration-style";
import { BackPage } from "../styles/utils-style";
import { useState } from "react";

const PageUserRegistration = () => {
    const { nameRef, emailRef, passwordRef, handleRegistration } = useUserRegistration();

    const [showPassword, setShowPassword] = useState(false);

    // Função para alternar a visibilidade da senha
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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
                    <div className="password-container">
                        <i
                            className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                            onClick={togglePasswordVisibility}
                            style={{ cursor: 'pointer' }}
                        ></i>
                        <input type={showPassword ? 'text' : 'password'} placeholder="Digite sua senha..." ref={passwordRef}></input>
                    </div>

                    <input type="submit" value="Cadastrar" />
                </form>
            </RegisterContainer>
        </>
    )
};

export { PageUserRegistration }