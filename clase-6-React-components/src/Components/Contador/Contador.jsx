import React, { useState } from 'react'

const Contador = () => {
    const [valor_contador, setContador] = useState(10)
    

    /* 
    useStete retorna un array de 2 elementos
    1er elemento es el valor de mi estado
    2do elemento es el setter o funcion de actualizacion de mi estado

    La funcion setter nos permite pasarle el valor a actualizar del estado y lo actualizara y luego recargara el componente
    setContador(3)
    */
    const sumar = ( ) => {
        /* 
        Esto seria terrible porque no actualizaria mi componente
        valor_contador = valor_contador + 1 */
        setContador(valor_contador + 1)
    }

    const restar = () => {
        setContador(valor_contador - 1)
    }
    console.log('Se ejecuto el componente contador')
    return (
        <div>
            <button
                onClick={restar}
                disabled={valor_contador === 0}
            >-</button>

            <span>{valor_contador}</span>

            <button
                onClick={sumar}
            >+</button>
        </div>
    )
}

export default Contador

