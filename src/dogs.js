import './App.css';
import {useParams} from 'react-router-dom'
import DogDetails from './dogDetails';



function Dogs({dogs}) {
    const name = useParams()

    const getSingleDog = () =>{
        const dog = dogs.filter(d=>d.name === name.name)
        console.log(dog[0].name)
        return(<DogDetails name={dog[0].name} age={dog[0].age}/>)
    }
  return (
      <>
      {name.name ? getSingleDog() :
      dogs.map((d) =>(
        <DogDetails name={d.name} age={d.age}/>
    ))}
    

    </>
  )
  
}

export default Dogs;
