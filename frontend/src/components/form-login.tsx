import { useLogin } from "../hooks/user-login";
import { useState } from "react";
import { Form, Label, Input, Icon, PasswordContainer, SubmitButton } from "../styles/form-login-style";

const FormLogin = () => {
    const { emailRef, passwordRef, handleSubmit } = useLogin();

    const [showPassword, setShowPassword] = useState(false);

    // Função para alternar a visibilidade da senha
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Label>Email</Label>
                <Input type="email" placeholder="Digite seu email..." ref={emailRef}></Input>

                <Label>Senha</Label>
                <PasswordContainer>
                    <Input type={showPassword ? 'text' : 'password'} placeholder="Digite sua senha..." ref={passwordRef}></Input>
                    <Icon
                        className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                        onClick={togglePasswordVisibility}
                        style={{ cursor: 'pointer' }}
                    ></Icon>
                </PasswordContainer>

                <SubmitButton type="submit" value="Login" />
            </Form>
        </>
    )
};

export { FormLogin }