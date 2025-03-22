import './ProductCard.css'
import styles from './ProductCard.module.css'
import { FaRegEye } from "react-icons/fa6";
import { FaRegMehRollingEyes, FaVoteYea } from "react-icons/fa";
import ICONS from '../Icons/Icons';

/**
 * ProductCard es un componente que renderiza una tarjeta de un producto
 * con un titulo, una imagen y un precio
 * @param {string} titulo - El titulo del producto
 * @param {string} img - La url de la imagen del producto
 * @param {number} precio - El precio del producto
 * @returns {JSX.Element} Un JSX Element que renderiza la tarjeta del producto
 */


const ProductCardClassNames = {
    productCardImg: styles.productCardImg
}

const priceStyle = {
    fontSize: '40px'
}


export const ProductCard = ({ titulo, img, precio }) => {

    return (
        <div className="product-card">
            <h2 className="product-card_title">{titulo}</h2>
            <img className={ProductCardClassNames.productCardImg} src='https://http2.mlstatic.com/D_NQ_NP_938585-MLU73121330750_122023-O.webp' />
            <span className="product-card_price price" style={priceStyle}>Precio: $</span>
            {/* <FaRegEye className='product-card_icon' /> */}
            <ICONS.EYE className='product-card_icon' />
            <FaRegMehRollingEyes className='product-card_icon' />
        </div>
    )
} 

//export {ProductCard}
//export default ProductCard