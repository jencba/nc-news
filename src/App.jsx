import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Link } from 'react-router-dom'
import { ArticlesPage } from './components/ArticlesPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
  <ArticlesPage />
    
    <Footer />
    </>
  )
}

export default App
