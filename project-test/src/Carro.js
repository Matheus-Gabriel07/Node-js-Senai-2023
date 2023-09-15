import React, { Component } from "react";

function Carro(props) {
  const especificações = {
    interior: "Carpete",
    tamanho: "grande"
  }

  return (
    <div className="helo">
      <h2>Olá sou um carro {props.cor}</h2>
      <PortaMalas tamanho={especificações} />
      <Volante cor="preto"/>
    </div>
  );
}

function PortaMalas(props) {
  return (<p>Dentro do porta malas {props.tamanho.interior} tem uma mochila</p>)
}

function Volante(props) {
  return <p>Seu volante é {props.cor}</p>
}

export default Carro;