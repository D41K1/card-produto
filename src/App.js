import logo from "./logo.gif";
import image from "./image.png";
import Vector from "./Vector.png";
import Close from "./Close.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [isGif, setIsGif] = useState(false);

  const handleGif = () => {
    isGif ? setIsGif(false) : setIsGif(true);
  };

  return (
    <div className="App">
      <div className="App-logo">
        {isGif ? (
          <button className="Close-sofa" onClick={handleGif}>
            <img src={Close} alt="360" />
          </button>
        ) : (
          <button className="Button-sofa" onClick={handleGif}>
            <img src={Vector} alt="360" />
          </button>
        )}

        {isGif ? (
          <img src={logo} className="sofa-gif" alt="logo" />
        ) : (
          <img src={image} className="sofa" alt="logo" />
        )}
      </div>
      <div className="info">
        <p className="Codigo">CÓDIGO 42404</p>
        <p className="Titulo">Sofá Margot II - Rosé</p>
        <p className="Preco">R$ 4.000</p>
        <button className="Button">ADICIONAR À CESTA</button>
      </div>
    </div>
  );
}

export default App;
