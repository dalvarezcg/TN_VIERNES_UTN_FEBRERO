import React, { useState } from "react"

const ProductCard = ({img, title, final_price, real_price, discount, is_admin, key}) => {
    //Key siempre valdra undefined
    console.log(key)
    console.log({is_admin})

    const [isBought, setIsBought] = useState(false)

    const handleClickBuyButton = () =>{
        alert("Gracias por su compra!")
        setIsBought(true)
    }

    let boton 

    if(isBought){
        boton = <button disabled>Comprado</button>
    }
    else{
        boton = <button onClick={handleClickBuyButton}>Comprar</button>
    }

    return (
        <div>
            <img src={img} />
            <h3>{title}</h3>
            <div>
                <span>${real_price}</span>
                <span>{discount}% OFF</span>
            </div>
            <span>${final_price}</span>
            {boton}
        </div>
    )
}

export default ProductCard