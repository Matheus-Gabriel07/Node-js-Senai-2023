import React, { useState } from "react";

const Contador = () => {
  const [contagem, defineContagem] = useState(0);

  return (
    <div>
      <button onClick={() => defineContagem(contagem+1)}>Incrementar</button>
      <button onClick={() => defineContagem(contagem-1)}>Remover</button>
      <p>{contagem}</p>
    </div>
  );
};

export default Contador;
