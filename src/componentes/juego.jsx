import './juego.css'
import React, { Fragment, useState } from "react"

const juego = (props) => {
    const variable = 20;
    const variableDos = 15;
    const variableTres = 10;
    let cantAyudas = 3;
    let puntos = 0;
    const puntosDeAyuda = 5;
    let vidas = 3;
    let juegoTerminado = false;
    let ayudaUsada = false;
    
    //eliminar
    let bandera = "Argentina";
    let respueta = "Argentina";
    let cantIntentos = 2;

    if(respueta == bandera && cantIntentos == 1){
        puntos = puntos + variable;
    }
    else if(respueta == bandera && cantIntentos == 2){
        puntos = puntos + variableDos;
    }
    else if(respueta == bandera && cantIntentos == 3){
        puntos = puntos + variableTres;
    }
    else{
        juegoTerminado = true;
    }
    if(ayudaUsada){
        puntos = puntos - puntosDeAyuda;
    }

    return(
        <div>
            <h1>Jueguito de Banderas</h1>
            <h3>Vidas: {vidas}</h3>
            <img href = {bandera}/>
            <input type="text" name="pais" className="u-full-width" placeholder="Pais"/>
            <button type="" >Ayuda {cantAyudas}</button>
            <button type="submit" className="u-full-width button-primary">Submit</button>
            <h3>Puntos: {puntos}</h3>
        </div>
    )
}

export default juego