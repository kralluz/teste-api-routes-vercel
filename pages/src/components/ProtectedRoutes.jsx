import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const userToken = localStorage.getItem("@TOKEN");

    return userToken ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;