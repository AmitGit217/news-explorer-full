import React, { createContext, useContext } from "react";
import {
    usePopupWithFrom,
    useUserRegistration,
    useMobileNav,
    useTooltip,
} from "./hooks";
import { useCurrentUser } from "./entities/user.hooks";
import { useCards } from "./entities/cards.hooks";

const GlobalContext = createContext({});

export const StoreProvider = ({ children }) => {
    const popupWithForm = usePopupWithFrom();
    const userRegistration = useUserRegistration();
    const mobileNav = useMobileNav();
    const tooltip = useTooltip();
    const currentUser = useCurrentUser();
    const newsCards = useCards();
    const store = {
        popupWithForm,
        userRegistration,
        mobileNav,
        tooltip,
        currentUser,
        newsCards,
    };
    return (
        <GlobalContext.Provider value={store}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useStore = () => {
    const store = useContext(GlobalContext);
    return store;
};
