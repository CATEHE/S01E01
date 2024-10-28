import { useState } from 'react'
import { img1, img2, img3, img4 } from './assets/images'
import frases from './data/phrases.json'
import { randomIndex } from './helpers/indexrandom.js'
import Titulo from './componets/titulo.jsx'
import './app.css'

const images = [img1, img2, img3, img4]



function App() {
  const [phrase,setFrases] = useState(frases[randomIndex(frases.length)])
  const [imagen,setImagenes] = useState(images[randomIndex(images.length)])

  function cambiar(){
    setFrases(frases[randomIndex(frases.length)])
    setImagenes(images[randomIndex(images.length)])
  }

  return (
    
    <>
      <div className='wrapper' style={{ backgroundImage: `url('${imagen}')` }}>  
       
        <div className='container'>
          <Titulo />
          <br></br>
          <button onClick={cambiar} className='btn'>Probar mi suerte</button>
          <div className='card'>
            <div className='card__body'>
              <q className='phrase'>{phrase.phrase}</q>
              
            </div>
            <cite className='author'>Fuente: {phrase.author}</cite>
          </div>
          
          
        </div>
        
      </div>
    </>
  )
}

export default App
