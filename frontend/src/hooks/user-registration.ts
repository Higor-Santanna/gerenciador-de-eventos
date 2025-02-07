import { useRef, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../service/api";

interface UserProps {
    id: string
    nameUser: string
    email: string
    password: string
}

const useUserRegistration = () => {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();
    const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$/
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/

    async function handleRegistration(event: FormEvent) {
        event.preventDefault();

        if (!nameRef.current?.value || !nameRef.current?.value.trim() || !regexName) {
            alert("O nome digitado é inválido.")
            return;
        };

        if (!emailRef.current?.value || !emailRef.current?.value.trim() || !regexEmail) {
            alert("O email informado é inválido")
            return;
        };

        if (!passwordRef.current?.value || !passwordRef.current?.value.trim()) {
            alert("A senha informada é inválida")
            return;
        };

        try {
            const response = await api.get("/user");
            const allUsers: UserProps[] = response.data;

            // Verifica se o email já existe
            const emailExists = allUsers.some((user) => user.email === emailRef.current?.value);

            if (emailExists) {
                alert("O email informado já está sendo utilizado.");
                return;
            }
            
            await api.post("/user", {
                nameUser: nameRef.current?.value,
                email: emailRef.current?.value,
                password: passwordRef.current?.value
            });

            navigate("/cadastro-realizado")
        } catch (error) {
            alert("Erro ao fazer o cadastro. Verifique suas credenciais.");
            console.error("Erro no login:", error);
        }
    };

    return { nameRef, emailRef, passwordRef, handleRegistration };
};

export { useUserRegistration }