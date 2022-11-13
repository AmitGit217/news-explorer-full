import { useState } from "react";
import userActionsApi from "../../utils/MainApi/MainApi.service";

export const useCurrentUser = () => {
    const [isLoggedIn, setLoggedIn] = useState(true);
    const [currentUser, setUser] = useState({});
    const [savedCards, setCards] = useState([]);

    const logoutCurrentUser = () => {
        setUser({});
        setLoggedIn(false);
        localStorage.removeItem("token");
        setCards([]);
    };
    const setCurrentUser = (values) => {
        setUser({ ...values });
    };

    const checkLocalToken = async () => {
        try {
            const token = localStorage.getItem("token");
            if (token) {
                const user = await userActionsApi.checkToken(token);
                setUser(user);
                return user;
            } else {
                logoutCurrentUser();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const saveArticle = async (article) => {
        try {
            const res = await userActionsApi.saveArticle(article);
            return res;
        } catch (err) {
            console.log(err);
        }
    };

    const getSavedCards = async () => {
        try {
            const cards = await userActionsApi.getUserArticles();
            if (!cards.message) {
                setCards(cards);
                return;
            } else {
                setCards([]);
                return;
            }
        } catch (err) {
            console.log(err);
        }
    };

    const deleteCardById = async (id) => {
        try {
            const res = await userActionsApi.deleteArticleById(id);
            const newSavedCardsArr = savedCards.filter(
                (card) => card._id !== res._id
            );
            setCards(newSavedCardsArr);
            return res;
        } catch (err) {
            console.log(err);
        }
    };

    const signinUser = async (values) => {
        try {
            const res = await userActionsApi.signin(values);
            if (res.token) {
                localStorage.setItem("token", res.token);
                const user = await checkLocalToken(res.token);
                setCurrentUser(user);
                setLoggedIn(true);
                return user;
            } else {
                return res;
            }
        } catch (err) {
            console.log(err);
        }
    };

    return {
        currentUser,
        isLoggedIn,
        setCurrentUser,
        logoutCurrentUser,
        checkLocalToken,
        getSavedCards,
        savedCards,
        saveArticle,
        deleteCardById,
        signinUser,
    };
};
