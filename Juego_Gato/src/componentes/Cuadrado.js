import React from "react";

const Cuadrado = ({value, onClick}) => {
    //si el valor no es nulo, dará ya sea O o X, y se pasará como una clase.
    //si el valor es nulo, se pasará como un cuadrado vacío. 
    const style = value ? `cuadrados ${value}` : `cuadrados`;
    
    return(
    <button className = {style} onClick = {onClick}>
        {value}
    </button>);
}

export default Cuadrado;