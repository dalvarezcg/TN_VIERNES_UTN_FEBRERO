const productos = [
    { 
      id: 1,
      precio: 500, 
      titulo: 'Pc gamer',
      categoria: 'Tecnologia'
    },
    {
      id: 2,
      precio: 300, 
      titulo: 'Celular',
      categoria: 'Tecnologia'
    },
    {
      id: 3,
      precio: 200, 
      titulo: 'Maceta',
      categoria: 'Accesorios'
    }
  ]

//Cuando conviene usar MAP: Cuando quiero transformar mi array de x cosas en un array de y cosas
//Tener en cuenta:
//map siempre devuelve un array
//map siempre devuelve un array con una longitud (cantidad de elementos) igual al array original
//el retorno de la callback sera el valor del elemento que se agregue al array resultante


//Aca conviene usar MAP
//Quiero tener un array con todos los nombres de productos
//EJ: ['cama', 'mesa', 'mesada']


const nombres_productos = productos.map(
  (producto) => {
    console.log(producto)
    console.log('hola')
    producto.iva = producto.precio * 0.21
    return  '<div>' + producto.titulo + '</div>'
  }
)

console.log(nombres_productos)

const funcionTonta = () => {
  
}

console.log(funcionTonta())