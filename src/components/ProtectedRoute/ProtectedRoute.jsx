import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../../Context/Auth.context/Auth.context";

export default function ProtectedRoute({ children }) {
    const { accessToken, user } = useContext(AuthContext);
    const isAuthenticated = Boolean(accessToken && user);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
