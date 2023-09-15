import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom/client";

const Temporizador = () => {
  const [contagem, definircontagem] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      definircontagem(() => contagem+ 1);
    }, 100);
  },[]);

  return (
    <div>
        <h1>Eu renderizei {contagem} vezes</h1>;
    </div>
  )
};

export default Temporizador
