import React, { useState } from 'react'

const CreateProductScreen = () => {
    //Cada vez que cambie el valor de un input voy a actualizar mi estado de formulario
    let initial_state_form = {
        title: '',
        price: 0,
        discount: 0,
        img: null
    }
    const [form_state, setFormState] = useState(initial_state_form)
    
    const handleChange = (event) => {
        let field = event.target.name
        let new_value = event.target.value
        setFormState(
            (prev_state) => {
                return {
                    ...prev_state,
                    [field]: new_value
                }
            }
        )
    }

    console.log(form_state)
    return (
        <div>
            <h1>Crea tu producto</h1>
            <form >
                <div>
                    <label htmlFor="title">Titulo:</label>
                    <input 
                        type="text" 
                        name='title' 
                        id="title" 
                        placeholder='Escribe el titulo...' 
                        value={form_state.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Precio:</label>
                    <input 
                        type="number" 
                        name='price' 
                        id="price" 
                        placeholder='Escribe el precio...' 
                        min={0} 
                        value={form_state.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="discount">Descuento (opcional):</label>
                    <input 
                        type="number" 
                        name='discount' 
                        id="discount" 
                        placeholder='Escribe el descuento...' 
                        max={99}
                        min={0} 
                        value={form_state.discount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="img">Seleciona una imagen:</label>
                    <input 
                        type='file' 
                        id='img' 
                        name='img' 
                    />
                </div>
                <button 
                    type='submit'
                >Crear producto</button>
            </form>
        </div>
    )
}

export default CreateProductScreen