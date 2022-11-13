import React from "react";
import { useStore } from "../../store";

export default function Tooltip() {
    const { closeTooltip } = useStore().tooltip;
    const { setRegisteredTrue } = useStore().userRegistration;

    function navigateToForm() {
        closeTooltip();
        setRegisteredTrue();
    }

    return (
        <>
            <h2 className='popup__title'>
                Registration successfully completed!
            </h2>
            <p className='popup__form-nav'>
                <span
                    className='popup__form-nav_action'
                    onClick={navigateToForm}>
                    Sign in
                </span>
            </p>
        </>
    );
}
