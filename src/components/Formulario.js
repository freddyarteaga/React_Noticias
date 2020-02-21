import React from 'react';  
import './Formulario.module.css';
import useSelect from '../hooks/useSelect'

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'busines', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnologia' },
    ]

    // utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES)

    // submit al form, pasar categoria a app.js
    const buscarNoticias = e => {

        e.preventDefault()
        guardarCategoria(categoria)

    }


    return ( 
        <div className="row buscador">
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className='heading'>Encuentra Noticias por Categoría</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input 
                            type="submit" 
                            className='btn-large amber darken-2 btn-block'
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

export default Formulario; 