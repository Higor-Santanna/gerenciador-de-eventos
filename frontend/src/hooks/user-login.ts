import { useRef, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../service/api";

const useLogin = () => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    async function handleSubmit(event: FormEvent){
        event.preventDefault();

        if(!emailRef.current?.value || !passwordRef.current?.value || !emailRef.current?.value.trim() || !passwordRef.current?.value.trim()) {
            alert("Email o senha incorretos, por favor digite novamente")
            return
        };
        
        try {
            const response = await api.post("/login", {
                email: emailRef.current?.value,
                password: passwordRef.current?.value
            });

            const { token } = response.data;
            localStorage.setItem("token", token);

            navigate("/home")
        } catch (error) {
            alert("Erro ao fazer login. Verifique suas credenciais.");
            console.error("Erro no login:", error);
        }
    }

    return { emailRef, passwordRef, handleSubmit };
};

export { useLogin };