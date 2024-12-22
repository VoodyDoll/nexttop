import React, { useContext } from 'react'
import { context } from './Robert'

const Farrel = () => {
    let song=(pip)=>{
console.log('pip')
    }
    let dogy=useContext(context)
  return (
    <div>
        Farrel:{dogy}
        {song('hoh')}
        
        
        </div>

  )
}

export default Farrel