import React, { useState } from "react";
import { useStore } from "../../store";
import { useFormWithValidation } from "../../utils/helpHooks";
import userActionsApi from "../../utils/MainApi/MainApi.service";

export default function Signup() {
    const { openTooltip } = useStore().tooltip;
    const { setRegisteredTrue } = useStore().userRegistration;
    const [dataExist, setDataExist] = useState({
        exist: false,
        message: "",
    });
    const { values, handleChange, errors, isValid } = useFormWithValidation();

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await userActionsApi.signup(values);
        if (!res.message) {
            openTooltip();
            return;
        }
        setDataExist({ exist: true, message: res.message });
        setTimeout(() => {
            setDataExist({ exist: false, message: "" });
        }, 2000);
    }

    return (
        <>
            <h2 className='popup__title'>Sign up</h2>
            <form className='popup__form' onSubmit={handleSubmit}>
                <div className='popup__form-labels'>
                    <label className='popup__form-label'>
                        Email:
                        <input
                            name='email'
                            onChange={handleChange}
                            value={values.email || ""}
                            placeholder='Enter email'
                            className='popup__form-input'
                            type='email'
                            required
                        />
                        <p className='popup__form-input_type_error'>
                            {errors.email && "Please enter a valid email"}
                        </p>
                    </label>
                    <label className='popup__form-label'>
                        Password:
                        <input
                            name='password'
                            value={values.password || ""}
                            onChange={handleChange}
                            placeholder='Enter password'
                            className='popup__form-input'
                            type='password'
                            required
                        />
                        <p className='popup__form-input_type_error'>
                            {errors.password}
                        </p>
                    </label>
                    <label className='popup__form-label'>
                        Username:
                        <input
                            name='name'
                            value={values.name || ""}
                            onChange={handleChange}
                            placeholder='Enter your username'
                            className='popup__form-input'
                            type='text'
                            required
                        />
                        <p className='popup__form-input_type_error'>
                            {errors.name}
                        </p>
                    </label>
                </div>
                <p className='popup__form-submit_type_error'>
                    {dataExist.exist && dataExist.message}
                </p>
                <button
                    className={`popup__form-submit ${
                        !isValid && "popup__form-submit_disabled"
                    }`}
                    type='submit'
                    disabled={isValid ? false : true}>
                    Sign up
                </button>
                <p className='popup__form-nav'>
                    or{" "}
                    <span
                        className='popup__form-nav_action'
                        onClick={setRegisteredTrue}>
                        Sign in
                    </span>
                </p>
            </form>
        </>
    );
}
