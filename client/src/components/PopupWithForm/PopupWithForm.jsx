import React from "react";
import "./PopupWithForm.css";
import { useCloseFromEsc } from "../../utils/helpHooks";
import { useStore } from "../../store";

export default function PopupWithForm({ children }) {
    const { isPopupWithFormOpen, closePopup } = useStore().popupWithForm;
    const { setRegisteredTrue } = useStore().userRegistration;
    const { closeTooltip } = useStore().tooltip;

    function closePopupWithForm() {
        closePopup();
        setTimeout(() => {
            closeTooltip();
            setRegisteredTrue();
        }, 200);
    }
    useCloseFromEsc(closePopup);

    return (
        <div
            className={`popup ${isPopupWithFormOpen && "popup_show"}`}
            onClick={(e) =>
                e.target === e.currentTarget && closePopupWithForm()
            }>
            <div className='popup__container'>
                <button
                    className='popup__exit'
                    type='button'
                    onClick={closePopupWithForm}
                />
                {children}
            </div>
        </div>
    );
}
