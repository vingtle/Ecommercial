import { createContext, useState, useContext, useMemo, useEffect } from "react";
import { toast } from "react-toastify";
import PropTypes  from "prop-types";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getAuth = async () => {
            try {
                console.log("Fetching:", `${import.meta.env.VITE_API_URL}/api/user/refresh`);
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/user/refresh`,
                    { credentials: "include" }
                );
                console.log("Response Status:", response.status);
        
                if (response.ok) {
                    const token = response.headers.get("Authorization");
                    const user = await response.json();
                    console.log("Fetched User:", user);
                    setAuth({ user, token });
                } else {
                    console.error("Error Response:", response.statusText);
                    setAuth(null);
                }
            } catch (error) {
                console.error("Authentication error:", error);
                setAuth(null);
            } finally {
                setIsLoading(false);
            }
        };        
            getAuth();
}, []);

const logout = async () => {
    try {
        await fetch(`${import.meta.env.VITE_API_URL}/api/user/logout`, {
            method: "POST",
            credentials: "include",
        });
        setAuth(null);
        toast.success("Logged out successfully.");
    } catch (error) {
        console.error("Logout error:", error);
        toast.error("Failed to log out. Please try again.");
    }
};

const value = useMemo(() => ({ auth, setAuth, logout, isLoading }), [auth, isLoading]);

return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
        }

        AuthProvider.propTypes = {
            children: PropTypes.node.isRequired,
        };

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthoProvider");
    }
    return context;
};