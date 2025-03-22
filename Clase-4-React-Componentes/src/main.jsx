
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import { hola, nombre, edad } from './math.js'
import juancito, {x} from './dummy.js'
import './global.css'

//createRoot es una funcion a la que le pasamos el Elemento del DOM donde queremos renderizar nuestra aplicacion

createRoot(
  document.getElementById('root')
).render(

  <App />

)
