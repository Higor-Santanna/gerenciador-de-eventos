import { Routes, Route } from "react-router-dom";
import { PageLogin } from "../pages/page-login";
import { HomePage } from "../pages/home-page";
import { PageUserRegistration } from "../pages/page-user-registration";
import { SucessRegistration } from "../pages/sucess-registration";
import { AddEventPage } from "../pages/add-event-page";
import { UpdateEventPage } from "../pages/update-event-page";

const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<PageLogin />} />
                <Route path="/home" element={<HomePage />}/>
                <Route path="/cadastro" element={<PageUserRegistration />}/>
                <Route path="/cadastro-realizado" element={<SucessRegistration />}/>
                <Route path="/home/adicionar-evento" element={<AddEventPage />}/>
                <Route path="/home/atualizar-evento/:eventId" element={<UpdateEventPage />}/>
            </Routes>
    )
};

export {AppRoutes}