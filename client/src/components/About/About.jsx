import React from "react";
import "./About.css";
import about from "../../images/about.png";

export default function About() {
    return (
        <section className='about'>
            <img className='about__image' src={about} alt='author' />
            <div className='about__main'>
                <h2 className='about__title'>About the author</h2>
                <p className='about__info'>
                    This block describes the project author. Here you should
                    indicate your name, what you do, and which development
                    technologies you know.
                </p>
                <p className='about__info'>
                    You can also talk about your experience with Practicum, what
                    you learned there, and how you can help potential customers.
                </p>
            </div>
        </section>
    );
}
