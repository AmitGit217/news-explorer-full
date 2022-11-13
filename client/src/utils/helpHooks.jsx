import { useEffect, useState, useCallback } from "react";
import { useStore } from "../store";
import PopupWithForm from "../components/PopupWithForm/PopupWithForm";
import Tooltip from "../components/Tooltip/Tooltip";
import Signup from "../components/Signup/Signup";
import Signin from "../components/Signin/Signin";

export const useCloseFromEsc = (setter) => {
    useEffect(() => {
        const closeFromEsc = (e) => e.key === "Escape" && setter(false);
        document.addEventListener("keydown", closeFromEsc);
        return () => document.removeEventListener("keydown", closeFromEsc);
    }, [setter]);
};

export const useCurrentPopup = () => {
    const { isRegistered } = useStore().userRegistration;
    const { isTooltipOpen } = useStore().tooltip;
    if (isTooltipOpen) {
        return <PopupWithForm children={<Tooltip />} />;
    } else {
        return (
            <PopupWithForm children={isRegistered ? <Signin /> : <Signup />} />
        );
    }
};

export function useFormWithValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest(".popup__form").checkValidity());
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, handleChange, errors, isValid, resetForm };
}
