import './App.css';
import {useState} from "react"
import {useNavigate} from "react-router-dom"




function ColorForm({newColor}) {
    const navigate  = useNavigate()

    const [formData, setFormData] = useState({colorName:"", color:""})

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData(formData=>({
            ...formData,
            [name]:value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        newColor(formData.colorName)
        navigate('/colors')
    }

    
    
  return (
      <>
      <form>
          <label for="colorName">Color</label>
          <input name='colorName' type='text' onChange={handleChange}/>
          <input name='color' type='color' onChange={handleChange}/>
          <button onClick={handleSubmit}>Submit</button>
      </form>
      

      
      </>
     
  )
  
}

export default ColorForm;
