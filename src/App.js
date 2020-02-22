import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'

function App () {

  // definir al categoria y noticias
  const [categoria, guardarCategoria] = useState('')
  const[noticia, guardarNoticias] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=d51c76aa5e6943a9a10b47ca898b92c0`

      const respuesta = await fetch(url)
      const noticias = await respuesta.json()

      guardarNoticias(noticias.articles)
    }
    consultarAPI()
  }, [categoria])

  return(
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />
      <div className='container white'>
          <Formulario
            guardarCategoria={guardarCategoria}
          />
      </div>
    </Fragment>
  )
}

export default App;


