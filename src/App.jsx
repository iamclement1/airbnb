import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import MainContent from './Components/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

export default App
