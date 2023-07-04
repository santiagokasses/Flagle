import './juego.css'
import React, { Fragment, useState, useEffect } from "react"
import { Button, InputGroup, Form, Image } from 'react-bootstrap'

const Juego = (props) => {
  const [Bandera, setBandera] = useState([{
    bandera: null,
    nombre: null,
  }])
  const [BanderaActual, setBanderaActual] = useState(0)
  const [puntos, setPuntos] = useState(0)
  //const [timer, setTimer] = useState(0)
  useEffect(() => {
    const obtenerAbanderas = async () => {
      try {
        const res = await fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
        const data = await res.json()
        const updatedBandera = data.data.map(e => ({
          bandera: e.flag,
          nombre: e.name
        }))
        setBandera(updatedBandera)
        setBanderaActual(Math.floor(Math.random() * updatedBandera.length))
      } catch (error) {
        console.error(error)
      }
    }
    obtenerAbanderas()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Bandera[BanderaActual].nombre.toUpperCase() === document.getElementsByName("pais")[0].value.toUpperCase()) {
      document.getElementsByName("pais")[0].value = ''
      setBanderaActual(Math.floor(Math.random() * Bandera.length))
      setPuntos(puntos + 10)
    }
    else {
      document.getElementsByName("pais")[0].value = ''
      setPuntos(puntos - 1)
    }
  }
  const handleClick = (e) => {
    e.preventDefault()
    alert(`La bandera era ${Bandera[BanderaActual].nombre}`);
    setBanderaActual(Math.floor(Math.random() * Bandera.length))
  }

  return (
    <>
      <h1>Jueguito de Banderas</h1>
      <h2>¿De que pais es esta bandera?</h2>
      <div className="banderita" ></div>
      <form onSubmit={handleSubmit}>
        <Image alt='' src={Bandera[BanderaActual].bandera}/>
        <InputGroup className="mb-3">
        <Form.Control type="text" name="pais"/>
        <Button type="submit" className="u-full-width button-primary">Submit</Button>
        </InputGroup>
        <h3>Puntos: {puntos}</h3>
        <Button onClick={handleClick}>Cambiar Bandera</Button>
      </form>
    </>
  )
}

export default Juego