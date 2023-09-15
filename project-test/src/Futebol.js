import React, { Component } from 'react'

function Futebol(props) {
    const fezGol = props.fezGol

    const chutar= () => {
        if(fezGol){
            return alert("Gol")
        }
        return alert("Ullll")
    }

    return (
        <button onClick={(event) => {chutar()}}>Dê um chute</button>
    )
}

export default Futebol