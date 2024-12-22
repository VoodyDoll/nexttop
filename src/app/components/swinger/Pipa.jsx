import React, { useContext } from 'react'
import {context} from './Robert'
const Pipa = ({lord}) => {
let doter=useContext(context)
  return (
    <div>
       <select onChange={(el)=>lord(el.target.value)}>
        <option value="Люди" >Люди</option>
        <option value="Звери">Звери</option>
        <option value="Рыбы">Рыбы</option>       
        
        </select> 
        {doter}
      
        </div>
  )
}

export default Pipa