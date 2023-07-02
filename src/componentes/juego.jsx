import './juego.css'
import React, { Fragment, useState, useEffect } from "react"

const Juego = (props) => {
    const [Bandera, setBandera] = useState([{
        bandera: null,
        nombre: null,
    }])
    const [Abandera, setABandera] = useState(0)
    const [puntos, setPuntos] = useState(0)
    const [timer, setTimer] = useState(0)
    useEffect(() => {
        const obtenerAbanderas = async () => {
          try {
            const res = await fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
            const data = await res.json()
            const updatedBandera = data.data.map(e => ({
              bandera: e.flag,
              nombre: e.name.toUpperCase()
            }))
            setBandera(updatedBandera)
            setABandera(Math.floor(Math.random() * updatedBandera.length))
          } catch (error) {
            console.error(error)
          }
        }
        obtenerAbanderas()
      }, [])

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