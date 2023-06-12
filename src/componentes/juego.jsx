import './juego.css'
import React, { Fragment, useState } from "react"


console.log("Hago consulta - axios");
(async () => { 
    console.log("Hago async consulta - axios")
    await axios({
        method: 'get',
        url: 'https://countriesnow.space/api/v0.1/countries/flag/images',
    })
    .then(res => {
        console.log("res", res)
        valores = document.getElementById("valores");
    })
    .catch(err => console.error("error", err))
    console.log("Fin async consulta - axios")
})();

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

export default Juego