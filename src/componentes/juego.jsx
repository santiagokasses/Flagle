import './juego.css'
import React, { Fragment, useState } from "react"

const juego = (props) => {
    if(respueta == bandera && intentos == 1){
        puntos = puntos + variable;
    }
    else if(respueta == bandera && intentos == 2){
        puntos = puntos + variableDos;
    }
    else if(respueta == bandera && intentos == 3){
        puntos = puntos + variableTres;
    }
    else{
        juegoTerminado = true;
    }

    return(
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