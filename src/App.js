import './App.css';
import NavBar from './header.js'
import Dogs from './dogs'
import Colors from './Colors';
import Color from './color';
import ColorForm from './ColorForm'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import {useState} from  'react'


function App({dogs}) {

  const [colors, setColors] = useState(["red", "green", "blue"])

  const newColor = (color) =>{
    setColors(color, ...colors)
  }

  
  return (
  <BrowserRouter>
  <NavBar/>
      <Routes>
        <Route exact path='/' element={<h1>HOME PAGE</h1>}/>
        <Route exact path='/dogs' element={<Dogs dogs={dogs}/>}/>
        <Route exact path='/dogs/:name' element={<Dogs dogs={dogs}/>}/>

        <Route exact path='/colors' element={<Colors colors={colors}/>}/>
        <Route exact path='/colors/:color' element={<Color/>}/>
        <Route exact path='/colors/new' element={<ColorForm newColor={newColor}/>}/>





      </Routes>

   </BrowserRouter>
  );
}


App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
