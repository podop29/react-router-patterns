import './App.css';
import {Link} from 'react-router-dom'
import {useState} from "react"




function Colors({colors}) {

    
    
  return (
      <>
      <h1>Welcome to color factory</h1>
      <Link to="/colors/new">NewColor</Link>

      <h3>Please pick a color</h3>
      
      {colors.map((color)=>(
          <li>
          <Link to={`/colors/${color}`}>{color}</Link>
          </li>
      ))}
      

      
      </>
     
  )
  
}

export default Colors;
