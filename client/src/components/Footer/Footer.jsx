import React from "react";
import "./Footer.css";
import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";

export default function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__copy'>
                © 2021 Supersite, Powered by News API
            </p>
            <div className='footer__links'>
                <div className='footer__text-links'>
                    <a href='#home' className='footer__link footer__link_text'>
                        Home
                    </a>
                    <a
                        className='footer__link footer__link_text'
                        href='https://practicum.com/en-isr/?gclid=Cj0KCQjwteOaBhDuARIsADBqRei8MiQBscI1NAhS1poy6Y0PCLiF0F7Ww6GySvKWf4QNApcLEm5xBT8aAsMgEALw_wcB'
                        target={"_blank"}
                        rel='noreferrer'>
                        Practicum
                    </a>
                </div>
                <div className='footer__image-links'>
                    <a
                        className='footer__link footer__link_image'
                        href='https://github.com/AmitGit217'
                        target={"_blank"}
                        rel='noreferrer'>
                        <img
                            className='footer__image'
                            src={github}
                            alt='github'
                        />
                    </a>
                    <a
                        className='footer__link footer__link_image'
                        href='https://www.linkedin.com/in/amitbg/'
                        target={"_blank"}
                        rel='noreferrer'>
                        <img className='footer__image' src={linkedin} alt='' />
                    </a>
                </div>
            </div>
        </footer>
    );
}
