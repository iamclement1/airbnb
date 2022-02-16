import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Pages/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
