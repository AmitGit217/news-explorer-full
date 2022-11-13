import React from "react";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store";
import logoutIcon from "../../images/logout_white.svg";

export default function Navigation() {
    const navigate = useNavigate();
    const { isLoggedIn, currentUser, logoutCurrentUser } =
        useStore().currentUser;
    const { openPopup } = useStore().popupWithForm;
    const { isMobileNavOpen, closeMobileNav } = useStore().mobileNav;

    function openFormPopup() {
        openPopup();
        closeMobileNav();
    }
    function backHome() {
        navigate("/");
        closeMobileNav();
    }
    function goToSavedArticlesPage() {
        closeMobileNav();
        navigate("/saved-news");
    }
    function logout() {
        logoutCurrentUser();
        closeMobileNav();
    }

    return (
        <div className={`popup-nav ${isMobileNavOpen && "popup-nav_show"}`}>
            <div className='popup-nav__container'>
                <div className='popup-nav__top'>
                    <div className='popup-nav__title' />
                    <button
                        className='popup-nav__exit'
                        type='button'
                        onClick={closeMobileNav}
                    />
                </div>
                <div className='popup-nav__bottom'>
                    <div className='popup-nav__links'>
                        <p className='popup-nav__link' onClick={backHome}>
                            Home
                        </p>
                        {isLoggedIn && (
                            <p
                                className='popup-nav__link'
                                onClick={goToSavedArticlesPage}>
                                Saved Articles
                            </p>
                        )}
                    </div>
                    <button
                        onClick={isLoggedIn ? logout : openFormPopup}
                        className='popup-nav__signin'
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
                </div>
            </div>
        </div>
    );
}
