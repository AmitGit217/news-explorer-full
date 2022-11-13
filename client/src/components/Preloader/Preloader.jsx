import React from "react";
import "./Preloader.css";

export default function Preloader() {
    return (
        <div className='preloader'>
            <span className='preloader__animation' />
            <p className='preloader__text'>Searching for news...</p>
        </div>
    );
}
