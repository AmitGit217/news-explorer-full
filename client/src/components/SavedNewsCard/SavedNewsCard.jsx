import React from "react";
import "./SavedNewsCard.css";
import { useStore } from "../../store";

export default function SavedNewsCard({
    title,
    text,
    date,
    image,
    source,
    keyword,
    currentCard,
}) {
    const { deleteCardById } = useStore().currentUser;

    return (
        <article className='saved-news-card'>
            <img className='saved-news-card__image' src={image} alt={title} />
            <div className='saved-news-card__main'>
                <p className='saved-news-card__date'>{date}</p>
                <h2 className='saved-news-card__title'>{title}</h2>
                <p className='saved-news-card__text'>{text}</p>
                <p className='saved-news-card__source'>{source}</p>
            </div>
            <span className='saved-news-card__trash'>
                <button
                    type='button'
                    onClick={() => deleteCardById(currentCard._id)}
                    className='saved-news-card__trash-image'
                />
                <p className='saved-news-card__remove-popup'>
                    Remove from saved
                </p>
            </span>
            <p className='saved-news-card__keyword'>{keyword}</p>
        </article>
    );
}
