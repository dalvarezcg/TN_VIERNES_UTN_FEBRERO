import React from 'react'
import Contador from './Components/Contador/Contador'
import BotonComprar from './Components/BotonComprar/BotonComprar'
import Productos from './Components/Productos/Productos'
function App() {

  return (
    <div>
      <h1>Hola mundo</h1>
      <Contador/>
      <br />
      <hr />
      <BotonComprar/>
      <br />
      <hr />
      <Productos/>
    </div>
  )
}

export default App
