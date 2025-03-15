import React  from 'react'
import './App.css'

function sumar (a,b) {
  return a + b
}


//Identificamos que App es un componente funcional porque retorna HTML (JSX)
function App() {
  let nombre = 'pepe'
  let dinero = 20
  const getBalance = () =>{
    return dinero
  }

  //DRY = Dont repeat yourself
  


  const handleSubmit = (event) =>{
    event.preventDefault()
    alert('Enviado')
  }

  const handleClickButtonColor = (color) =>{
    alert('Clickeaste el boton ' + color)
  }

  return (
    <div className="App">
      <h1>Hola {nombre}</h1>
      <span>Tu balance: ${getBalance()}</span>
      UTN React Clase 4
      <form onSubmit={handleSubmit}>
        <label htmlFor='nombre'>Ingresa tu nombre:</label>
        <input type="text" id='nombre' />
        
        <input type='submit'/>
      </form>
      <button onClick={() => handleClickButtonColor('rojo')}>Rojo</button>
      <button onClick={() => handleClickButtonColor('amarillo')}>Amarillo</button>
      <button onClick={() => handleClickButtonColor('azul')}>Azul</button>

      <ProductCard titulo={'Sommier King size'}/>
      <ProductCard titulo={'Pc gamer'}/>
      <ProductCard titulo={'Maceta'}/>
      <ProductCard titulo={'Celular'}/>
    </div>
  )
}


//Props es un objeto con las propiedades del componente si no hay es un objeto vacio
/* const ProductCard = (props) =>{
  console.log(props)
  return (
    <div>
      <h2>{props.titulo}</h2>
      <img src='https://http2.mlstatic.com/D_NQ_NP_938585-MLU73121330750_122023-O.webp'/>
      <span>Precio: $</span>
    </div>
  )
} */

  /**
   * ProductCard es un componente que renderiza una tarjeta de un producto
   * con un titulo, una imagen y un precio
   * @param {string} titulo - El titulo del producto
   * @param {string} img - La url de la imagen del producto
   * @param {number} precio - El precio del producto
   * @returns {JSX.Element} Un JSX Element que renderiza la tarjeta del producto
   */
  const ProductCard = ({titulo, img, precio}) =>{

    return (
      <div>
        <h2>{titulo}</h2>
        <img src='https://http2.mlstatic.com/D_NQ_NP_938585-MLU73121330750_122023-O.webp'/>
        <span>Precio: $</span>
      </div>
    )
} 

//Desestructuracion
/* let objeto = {nombre: 'pepe', apellido: 'suarez' }
let {nombre, apellido} = objeto
console.log(`Hola mi nombre es ${nombre} y mi apellido es ${apellido}`) */


//Desestructuracion de objeto por parametro
/* let objeto = {nombre: 'pepe', apellido: 'suarez' }

const presentarme = ({nombre, apellido}) => {

  console.log(`Hola mi nombre es ${nombre} y mi apellido es ${apellido}`) 
}

presentarme(objeto) */





export default App
