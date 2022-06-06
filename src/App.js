import React,{useState,useEffect} from "react";
import './index.css'
import axios from "axios"

const useNotes = (url) => {
  const [notes, setNotes] = useState([])
  
  useEffect(() => {
    axios.get(url).then(response => {
      setNotes(response.data)
    })
  }, [url])
  
  return notes
}

const App =()=>{
    
    const [counter,setCounter] = useState(0)
     const notes = useNotes(BACKEND_URL)

    return<>
    
    <div className="container" >
      { <h1>{counter} clicks</h1> } 
    </div>

    <button onClick={ ()=>{setCounter(counter+1)}}>Increment</button>
    <button onClick={ ()=>{setCounter(counter-1)}}>Decrement</button>

      <div>{notes.length} notes on server {BACKEND_URL}</div>
    </> 

}
export default App;