import React from 'react'
import "./Cover.css";
import Cover_familia from "../../mis_fotos/Cover_familia.MP4";

const cover = () => {
    return (
        <div className = "cover-container">
            <video className = "video" src = {Cover_familia} autoPlay loop muted></video>
            <h1>Antonio Mauricio Acuña Hernández</h1>
            <p>Ingeniero Mecatrónico | Apasionado por el fútbol | Apasionado por el cine | Scio-Bootcamper</p>
        </div>
    )
}

export default cover
