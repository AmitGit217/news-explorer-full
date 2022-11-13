import React from "react";
import "./Main.css";
import NewsCardsList from "../NewsCardsList/NewsCardsList";
import About from "../About/About";

export default function Main() {
    return (
        <main className='main'>
            <NewsCardsList />
            <About />
        </main>
    );
}
