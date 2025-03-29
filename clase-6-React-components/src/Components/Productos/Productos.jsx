import React, { useEffect, useState } from 'react'

const Productos = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(false)
    const obtenerProductos = async () => {
        setCargando(true)
        const respuesta = await fetch('http://localhost:5173/productos.json')
        const data = await respuesta.json()
        setProductos(data)
        setCargando(false)
    }
    //Nos aseguramos que obtener productos se ejecute una vez
    useEffect(
        () => { 
            obtenerProductos()
        },
        []
    )
    console.log({cargando})
    console.log({productos})
    
    return (
        <div>Productos</div>
    )
}

export default Productos