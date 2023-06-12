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


    const [Bandera, setBanderda] = useState('')

    console.log("Hago consulta - fetch")
    fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
        .then(res => res.json())
        .then(res => {
            Bandera = res.data[1]
            console.log(res.data[1])
        })
        .catch(err => console.error("error", err))
    console.log("Fin consulta - fetch")
    // if (respueta == bandera && cantIntentos == 1) {
    //     puntos = puntos + variable;
    // }
    // else if (respueta == bandera && cantIntentos == 2) {
    //     puntos = puntos + variableDos;
    // }
    // else if (respueta == bandera && cantIntentos == 3) {
    //     puntos = puntos + variableTres;
    // }
    // else {
    //     juegoTerminado = true;
    // }
    if(ayudaUsada){
        puntos = puntos - puntosDeAyuda;
    }

    return (
        <div>
            <h1>Jueguito de Banderas</h1>
            <img href="${bandera}"/>
            <input type="text" name="pais" className="u-full-width" placeholder="Pais"/>
            <button type="submit" className="u-full-width button-primary">Submit</button>
            <h3>Puntos: ${puntos}</h3>
        </div>
    )
}

export default juego