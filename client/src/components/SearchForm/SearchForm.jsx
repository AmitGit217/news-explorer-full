import React from "react";
import "./SearchForm.css";
import { useStore } from "../../store";
import { useState } from "react";

export default function SearchForm() {
    const [search, setKeyword] = useState("");
    const { getSavedCards } = useStore().currentUser;
    const { getCardsByKeyWord } = useStore().newsCards;

    function handleChange(e) {
        const { value } = e.target;
        setKeyword(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        getSavedCards();
        getCardsByKeyWord(search);
    }

    return (
        <section className='search-form'>
            <div className='search-form__text'>
                <h1 className='search-form__title'>
                    What's going on in the world?
                </h1>
                <h2 className='search-form__subtitle'>
                    Find the latest news on any topic and save them in your
                    personal account.
                </h2>
            </div>
            <form className='search-form__search' onSubmit={handleSubmit}>
                <input
                    className='search-form__search-text'
                    type='text'
                    placeholder='Enter topic'
                    name='keyword'
                    value={search || ""}
                    onChange={handleChange}
                />
                <button className='search-form__search-button' type='submit'>
                    Search
                </button>
            </form>
        </section>
    );
}
