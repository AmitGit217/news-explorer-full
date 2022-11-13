import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStore } from "../../store";
import logoutIcon from "../../images/logout_white.svg";

export default function Header() {
    const { openPopup } = useStore().popupWithForm;
    const { openMobileNav } = useStore().mobileNav;
    const { isLoggedIn, currentUser, logoutCurrentUser } =
        useStore().currentUser;
    return (
        <header className='header'>
            <div className='header__title' />
            <button
                className='header__burger'
                type='button'
                onClick={openMobileNav}
            />
            <nav className='header__nav'>
                <Link
                    to={"/"}
                    className='header__button header__button_type_nav header__button_active'>
                    Home
                </Link>
                {isLoggedIn && (
                    <Link
                        to={"/saved-news"}
                        className='header__button header__button_type_nav'>
                        Saved articles
                    </Link>
                )}

                <button
                    onClick={isLoggedIn ? logoutCurrentUser : openPopup}
                    className='header__button header__button_type_signin'
                    type='button'>
                    {isLoggedIn ? currentUser.name : "Signin"}
                    {isLoggedIn && (
                        <img
                            className='header__logout-icon'
                            src={logoutIcon}
                            alt='logout icon'
                        />
                    )}
                </button>
            </nav>
        </header>
    );
}
