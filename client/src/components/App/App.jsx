import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";
import Top from "../Top/Top";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { useCurrentPopup } from "../../utils/helpHooks";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { useStore } from "../../store";
import { useEffect } from "react";

export default function App() {
    const popupToShow = useCurrentPopup();
    const { isLoggedIn, checkLocalToken } = useStore().currentUser;

    useEffect(() => {
        checkLocalToken();
    }, []);

    return (
        <section className='app'>
            {popupToShow}
            <Navigation />
            <Top />
            <Routes>
                <Route
                    path='/saved-news'
                    element={
                        <ProtectedRoute
                            children={<SavedNews />}
                            isLoggedIn={isLoggedIn}
                        />
                    }
                />
                <Route path='/' element={<Main />} />
            </Routes>
            <Footer />
        </section>
    );
}
