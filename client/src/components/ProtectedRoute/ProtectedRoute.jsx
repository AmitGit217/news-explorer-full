import React from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useStore } from "../../store";

export default function ProtectedRoute({ isLoggedIn, children }) {
    const { openPopup } = useStore().popupWithForm;

    useEffect(() => {
        if (!isLoggedIn) {
            openPopup();
        }
    }, [isLoggedIn]);

    return isLoggedIn ? children : <Navigate to='/' />;
}
