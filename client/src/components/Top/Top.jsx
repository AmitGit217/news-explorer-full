import React from "react";
import "./Top.css";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

export default function Top() {
    const location = useLocation();

    return (
        <section
            id='home'
            className={`top  ${
                location.pathname === "/saved-news" && "top_white"
            }`}>
            {location.pathname === "/" ? <Header /> : <SavedNewsHeader />}
            {location.pathname !== "/saved-news" && <SearchForm />}
        </section>
    );
}
