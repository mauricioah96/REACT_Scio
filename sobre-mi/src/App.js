import React, {useState, useEffect} from 'react';
import './App.css';
import Cover from "./componentes/cover/Cover.js";
import Navbar from "./componentes/navbar/Navbar.js";


function App() {
  const [scrollHeight, setScrollHeight] = useState(0);


  //controlar la posición del scroll con una función
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  //Actualizar cada scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]); //Se envía como argumento para que cada que el scroll cabie, se actualice el estado

  return (
    <div className="App">
        <Navbar isScrolling={scrollHeight} />
        <Cover />
        
    </div>
  );
}

export default App