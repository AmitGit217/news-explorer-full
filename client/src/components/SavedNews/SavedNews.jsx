import React, { useState } from "react";
import "./SavedNews.css";
import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";
import { useStore } from "../../store";
import { useEffect } from "react";

export default function SavedNews() {
    const { currentUser, savedCards, getSavedCards } = useStore().currentUser;
    const [keywords, setKeywords] = useState([]);

    useEffect(() => {
        getSavedCards();
    }, []);

    useEffect(() => {
        const newArr = savedCards.map((card) => card.keyword);
        setKeywords([...new Set(newArr)]);
    }, [savedCards]);

    return (
        <>
            {keywords.length >= 1 ? (
                <section className='saved-news'>
                    <div className='saved-news__text'>
                        <h2 className='saved-news__title'>Saved articles</h2>
                        <p className='saved-news__description'>
                            {currentUser.name}, you have saved{" "}
                            {savedCards.length} articles
                        </p>
                        <p className='saved-news__keywords'>
                            By keywords:{" "}
                            <strong>
                                {keywords?.slice(0, 2).map((word, index) => {
                                    return (
                                        <span key={index}>
                                            {word}
                                            {index + 1 < keywords.length &&
                                                ","}{" "}
                                        </span>
                                    );
                                })}
                                {keywords.length > 2 &&
                                    `And ${keywords.length - 2} others`}
                            </strong>
                        </p>
                    </div>
                    <ul className='saved-news__articles'>
                        {savedCards?.map((article, index) => {
                            return (
                                <li key={index}>
                                    <SavedNewsCard
                                        isSaved={true}
                                        image={article.image}
                                        date={article.date}
                                        title={article.title}
                                        text={article.text}
                                        source={article.source}
                                        keyword={article.keyword}
                                        currentCard={article}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </section>
            ) : (
                <section className='saved-news'>
                    <div className='saved-news__text'>
                        <h2 className='saved-news__title'>Saved articles</h2>
                        <p className='saved-news__description'>
                            {currentUser.name}, you have saved{" "}
                            {savedCards.length} articles
                        </p>
                    </div>
                </section>
            )}
        </>
    );
}
