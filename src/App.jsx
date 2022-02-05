import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './logo.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import MainContent from './Components/MainContent'
import Info from './Components/Info/Info'
import Button from './Components/Info/Button'
import About from './Components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Info />
      <Button />
      <About />
      <Footer/>
    </div>
  )
}

export default App
