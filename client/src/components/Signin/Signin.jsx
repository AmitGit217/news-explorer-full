import React, { useState } from "react";

import { useStore } from "../../store";
import { useFormWithValidation } from "../../utils/helpHooks";

export default function Signin() {
    const [error, setError] = useState("");
    const { signinUser } = useStore().currentUser;
    const { setRegisteredFalse } = useStore().userRegistration;
    const { closePopup } = useStore().popupWithForm;
    const { values, handleChange, errors, isValid } = useFormWithValidation();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await signinUser(values);
            if (res._id) {
                closePopup();
                window.location.reload();
            } else {
                setError(res.message);
                setTimeout(() => {
                    setError("");
                }, 2000);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <h2 className='popup__title'>Sign in</h2>
            <form className='popup__form' onSubmit={handleSubmit}>
                <div className='popup__form-labels'>
                    <label className='popup__form-label'>
                        Email:
                        <input
                            name='email'
                            value={values.email || ""}
                            className='popup__form-input'
                            type='email'
                            placeholder='Enter email'
                            onChange={handleChange}
                            required
                        />
                        <p className='popup__form-input_type_error'>
                            {errors.email && "Invalid email address"}
                        </p>
                    </label>
                    <label className='popup__form-label'>
                        Password:
                        <input
                            name='password'
                            value={values.password || ""}
                            placeholder='Enter password'
                            className='popup__form-input'
                            type='password'
                            onChange={handleChange}
                            required
                        />
                        <p className='popup__form-input_type_error'>
                            {errors.password}
                        </p>
                    </label>
                </div>
                <p className='popup__form-submit_type_error'>{error}</p>
                <button
                    className={`popup__form-submit  ${
                        !isValid && "popup__form-submit_disabled"
                    }`}
                    type='submit'
                    disabled={isValid ? false : true}>
                    Sign in
                </button>
                <p className='popup__form-nav'>
                    or{" "}
                    <span
                        className='popup__form-nav_action'
                        onClick={setRegisteredFalse}>
                        Sign up
                    </span>
                </p>
            </form>
        </>
    );
}
