import { createContext, useState } from "react";

export const AuthContext = createContext(null);

function getStoredUser() {
    try {
        const storedUser = localStorage.getItem("souq-user");
        return storedUser ? JSON.parse(storedUser) : null;
    } catch {
        return null;
    }
}

export function AuthProvider({ children }) {
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken"));
    const [user, setUser] = useState(getStoredUser);

    function logout() {
        setAccessToken(null);
        setRefreshToken(null);
        setUser(null);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("souq-user");
    }

    return (
        <AuthContext.Provider value={{ accessToken, setAccessToken, refreshToken, setRefreshToken, user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
}