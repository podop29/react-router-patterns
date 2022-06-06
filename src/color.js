import './App.css';

import {useParams, useNavigate} from "react-router-dom"


function Color() {
    const navigate  = useNavigate()
   const param = useParams()
   const color = param.color

    console.log(color)
  return (
      <>
      <h1 style={{color:color}}>{color}</h1>
      <button onClick={()=>navigate('/colors')}>Return</button>

      </>
     
  )
  
}

export default Color;
