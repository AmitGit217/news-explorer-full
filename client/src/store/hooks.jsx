import { useState } from "react";

export const usePopupWithFrom = () => {
    const [isPopupWithFormOpen, setPopupWithForm] = useState(false);
    const openPopup = () => setPopupWithForm(true);
    const closePopup = () => setPopupWithForm(false);
    return { isPopupWithFormOpen, openPopup, closePopup };
};

export const useUserRegistration = () => {
    const [isRegistered, setIsRegistered] = useState(true);
    const setRegisteredTrue = () => setIsRegistered(true);
    const setRegisteredFalse = () => setIsRegistered(false);
    return { isRegistered, setRegisteredTrue, setRegisteredFalse };
};

export const useMobileNav = () => {
    const [isMobileNavOpen, setMobileNav] = useState(false);
    const openMobileNav = () => setMobileNav(true);
    const closeMobileNav = () => setMobileNav(false);
    return { isMobileNavOpen, openMobileNav, closeMobileNav };
};

export const useTooltip = () => {
    const [isTooltipOpen, setTooltip] = useState(false);
    const openTooltip = () => setTooltip(true);
    const closeTooltip = () => setTooltip(false);
    return { isTooltipOpen, openTooltip, closeTooltip };
};
