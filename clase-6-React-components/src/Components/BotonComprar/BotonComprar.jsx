import React, { useState } from 'react'

const ESTADOS_DISPONIBLES = Object.freeze({
    NO_COMPRADO: 'NO_COMPRADO',
    COMPRADO: "COMPRADO",
    CARGANDO: "CARGANDO"
})
const BotonComprar = () => {
    const initial_state = ESTADOS_DISPONIBLES.NO_COMPRADO
    const [estado_boton, setEstadoBoton] = useState(initial_state) 
    

    const reset = () => {
        setEstadoBoton(initial_state)
    }

    const comprar = () => {
        setEstadoBoton(ESTADOS_DISPONIBLES.CARGANDO)
        setTimeout(
            () =>{
                setEstadoBoton(ESTADOS_DISPONIBLES.COMPRADO)
            },
            2000
        )
    }

    

    let content 
    if(estado_boton === ESTADOS_DISPONIBLES.COMPRADO){
        content = <button disabled>Comprado</button>
    }
    else if(estado_boton === ESTADOS_DISPONIBLES.CARGANDO){
        content = <button disabled>Cargado...</button>
    }
    else{
        content = <button onClick={comprar}>Comprar</button>
    }
    return (
        <div>
            {content}
            <button 
                onClick={reset} 
                disabled={
                    estado_boton === ESTADOS_DISPONIBLES.CARGANDO
                    || 
                    estado_boton === ESTADOS_DISPONIBLES.NO_COMPRADO
                }
            >Reset</button>
        </div>
    )
}

export default BotonComprar