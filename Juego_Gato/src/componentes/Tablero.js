import React from "react";
import Cuadrado from "./Cuadrado.js";

const Tablero = ({ cuadrados, onClick }) => (
  <div className="tablero">
    {cuadrados.map((cuadrado, i) => (
      <Cuadrado key={i} value={cuadrado} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Tablero;