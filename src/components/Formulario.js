import React from 'react';  
import './Formulario.module.css';
import useSelect from '../hooks/useSelect'

const Formulario = () => {

    // utilizar custom hook

    const [categoria, SelectNoticias] = useSelect()

    return ( 
        <div className="row buscador">
            <div className="col s12 m8 offset-m2">
                <form>
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