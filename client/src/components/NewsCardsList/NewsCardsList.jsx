import React, { useState } from "react";
import "./NewsCardsList.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import { useStore } from "../../store";

export default function NewsCardsList() {
    const { cards, notFound, isLoading } = useStore().newsCards;
    const [cardsToShow, setCardsToShow] = useState(3);
    const showButton = cardsToShow < cards?.length;

    return (
        <>
            {isLoading && <Preloader />}
            {notFound && (
                <div className='news-list__not-found'>
                    <div className='news-list__not-found-image' />
                    <p className='news-list__not-found-title'>Nothing found</p>
                    <p className='news-list__not-found-text'>
                        Sorry, but nothing matched your search terms.
                    </p>
                </div>
            )}
            {cards.length > 1 && (
                <section className='news-list'>
                    <h2 className='news-list__title'>Search results</h2>
                    <ul className='news-list__articles'>
                        {cards.slice(0, cardsToShow).map((article, index) => {
                            return (
                                <li key={index}>
                                    <NewsCard
                                        image={article.urlToImage}
                                        date={article.publishedAt}
                                        title={article.title}
                                        text={article.content}
                                        source={article.source.name}
                                        currentCard={article}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                    {showButton && (
                        <button
                            className='news-list__show-more'
                            type='button'
                            onClick={() =>
                                setCardsToShow((prev) => (prev += 3))
                            }>
                            Show more
                        </button>
                    )}
                </section>
            )}
        </>
    );
}
