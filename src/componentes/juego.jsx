import './Juego.css'
import React, { Fragment, useState, useEffect } from "react"

const Juego = (props) => {
    const [Bandera, setBandera] = useState([{
        bandera: null,
        nombre: null,
    }])
    const [Abandera, setABandera] = useState(0)
    const [puntos, setPuntos] = useState(0)

    // const variable = 20;
    // const variableDos = 15;
    // const variableTres = 10;
    // let cantAyudas = 3;
    // const puntosDeAyuda = 5;
    // let vidas = 3;
    // let juegoTerminado = false;
    // let ayudaUsada = false;

    // //eliminar
    // let respueta = "Argentina";
    // let cantIntentos = 2;

    useEffect(() => {
        const obtenerAbanderas = () => {
            fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
                .then(res => res.json())
                .then(res => {
                    const updatedBandera = res.data.map(e => ({
                        bandera: e.flag,
                        nombre: e.name.toUpperCase()
                    }))
                    setBandera(updatedBandera)
                })
        }
        obtenerAbanderas()
    }, [])
    useEffect(()=>{
        setABandera(Math.floor(Math.random() * Bandera.length))
        console.log(Abandera)
    }, [Bandera])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Bandera[Abandera].nombre == document.getElementsByName("pais")[0].value.toUpperCase()) {
            document.getElementsByName("pais")[0].value = ''
            setABandera(Math.floor(Math.random() * Bandera.length))
            setPuntos((e) => e + 10)
            console.log("correcto")
            console.log(document.getElementsByName("pais")[0].value)
        }
        else {
            document.getElementsByName("pais")[0].value = ''
            setPuntos((e) => e -1)
            console.log("incorrecto")
            console.log(document.getElementsByName("pais")[0].value)
        }
    }
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
    // if (ayudaUsada) {
    //     puntos = puntos - puntosDeAyuda;
    // }
    return (
        <>
            <h1>Jueguito de Banderas</h1>
            <h2>¿De que pais es esta bandera?</h2>
            <div className="banderita" ></div>
            <form onSubmit={handleSubmit}>
                <div><img src={Bandera[Abandera].bandera}/></div>
                <input type="text" name="pais" className="u-full-width" placeholder={Bandera[Abandera].nombre} />
                <button type="submit" className="u-full-width button-primary">Submit</button>
                <h3>Puntos: {puntos}</h3>
            </form>
        </>
    )
}

export default Juego