import React from "react";
import { useAuth } from "../../../context/AuthContext";


function ProtectedRoute({ children }) {
    const { auth, isLoading } = useAuth();

    console.log({ auth, isLoading });
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!auth?.token) {
        return <login />;
    }

    return children;
}

export default ProtectedRoute;