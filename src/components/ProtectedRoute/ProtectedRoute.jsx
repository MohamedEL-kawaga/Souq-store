import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../../Context/Auth.context/Auth.context";

export default function ProtectedRoute({ children }) {
    const { accessToken } = useContext(AuthContext);

    if (!accessToken) {
        return <Navigate to="/login" />;
    }

    return children;
}
