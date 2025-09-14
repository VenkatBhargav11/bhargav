import { useState } from 'react'
import reactLogo from './assets/react.svg'
import vitllleLogo from '/vite.svg'
import './App.css'



function Count() {
  const[count,setCount] = useState(0)
  return(<div className="App">
    <h2>Couner:{count}</h2>
    <button onClick={() =>setCount(count + 1)}>Increment</button>
  </div>)
}
export default Count
 