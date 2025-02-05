import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove o token do localStorage
        navigate("/"); // Redireciona para a página de login
    };

    return { handleLogout };
};

export { useLogout };