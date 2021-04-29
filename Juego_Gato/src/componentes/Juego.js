import React, {useState} from "react";
import { calculateWinner} from "../Ayudante";
import Tablero from "../componentes/Tablero";

const Juego = () => {
    //Estado inicial
    const [history, setHistory] = useState([Array(9).fill(null)]);
    //Inicializa el primer movimiento
    const [stepNumber, setStepNumber] = useState(0);
    //Siempre iniciará con las X
    const [xSiguiente, setXSiguiente] = useState(true);
    const ganador = calculateWinner(history[stepNumber]);
    //Si x es el que sigue, mandar x; si no, O. Esto se verifica con la const xSiguiente
    const XO = xSiguiente ? "X" : "O";
    //Tener registro del historial
    const darClick = (i) => {
        const historialPunto = history.slice(0, stepNumber + 1);
        const actual = historialPunto[stepNumber];
        const cuadrados = [...actual]; //copia del historial

        //Si hay un ganador o se llenó el número de cuadrados, ir a return
        if(ganador || cuadrados[i]) return;

        //seleccionar cuadrado
        cuadrados[i] = XO;

        setHistory([...historialPunto, cuadrados]);
        
        //determinar qué movimiento es
        setStepNumber(historialPunto.length);

        setXSiguiente(!xSiguiente);
    };
    const goTo = (paso) => {
        setStepNumber(paso);
        //si es divisible entre dos, entonces debería estar en O, si no, en X
        setXSiguiente(paso % 2 === 0);
    }

    const renderMovimientos = () => 
        history.map((_step, movimiento) =>{
            const destino = movimiento ? `` : `Reiniciar juego`;
            return(
             
                    <button onClick = {() => goTo(movimiento)}>{destino}</button>
                  
            );
        });
    

    return(
        <>
            <h1> Juego de gato - Scio Bootcamp (REACT)</h1>
            <Tablero cuadrados = {history[stepNumber]} onClick = {darClick} />
            <div className = "informacion">
                <div>
                  <br></br>
                {renderMovimientos()}
                </div>
                <h3>{ganador ? "El ganador es: " + ganador : "Turno de: " + XO}</h3>
            </div>
        </>
    );

};

export default Juego;