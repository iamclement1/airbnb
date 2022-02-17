import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Pages/Hero'
import Card from './Components/Pages/Card'
import Image from './assets/Card-Img.png'
import Img from './assets/CardImg2.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
      img={ Image }
      name= 'Life lesson with Clement'
      />
      <Card 
      img={ Img }
      />
    </div>
  )
}

export default App
