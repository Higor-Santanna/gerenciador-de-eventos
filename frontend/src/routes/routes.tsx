import { Routes, Route } from "react-router-dom";
import { PageLogin } from "../pages/page-login";
import { HomePage } from "../pages/home-page";

const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<PageLogin />} />
                <Route path="/home" element={<HomePage />}/>
            </Routes>
    )
};

export {AppRoutes}