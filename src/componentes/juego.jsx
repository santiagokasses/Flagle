import './juego.css'
import React, { Fragment, useState } from "react"

const juego = (props) => {
    return(
        <div>
            <h1>Jueguito de Banderas</h1>
            <h3>Puntos: ${puntos}</h3>
            <img></img>
            <input type="text" name="pais" className="u-full-width" placeholder="Pais"/>
        </div>
    )
}

export default juego