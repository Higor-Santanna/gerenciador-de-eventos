import { useRef, FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../service/api";

type UserProps = {
    nameUser: string
}

const useLogin = () => {
    const emailRef = useRef<HTMLInputElement | null>(null);//referência para o email
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();
    const [user, setUser] = useState<UserProps | null>(null);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (!emailRef.current?.value || !passwordRef.current?.value || !emailRef.current?.value.trim() || !passwordRef.current?.value.trim()) {
            alert("Email o senha incorretos, por favor digite novamente")
            return
        };

        try {
            const response = await api.post("/login", {
                email: emailRef.current?.value,
                password: passwordRef.current?.value
            });

            const { token } = response.data;//extrai o token
            localStorage.setItem("token", token);

            navigate("/home")
        } catch (error) {
            alert("Erro ao fazer login. Verifique suas credenciais.");
            console.error("Erro no login:", error);
        }
    }

    //Função que carrega dados do usuário
    async function loadUser() {
        const token = localStorage.getItem("token");
        if (!token) return;

        // Recuperando o ID do usuário do token 
        const decodedToken = JSON.parse(atob(token.split('.')[1]));  // Decodificando token JWT
        const userId = decodedToken?.id; // Amarzena o ID do usuário

        if (!userId) return;

        try {
            // Agora você passa o ID na URL da requisição
            const response = await api.get(`/user/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setUser(response.data);  // Armazenando o usuário completo
        } catch (error) {
            console.error("Erro ao carregar usuário:", error);
        }
    }

    useEffect(() => {
        loadUser();
    }, []);

    return { user, emailRef, passwordRef, handleSubmit };
};

export { useLogin };