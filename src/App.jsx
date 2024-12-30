import { useState, useEffect} from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ArticleInfo } from './components/ArticleInfo'
import { Routes, Route } from 'react-router-dom'
import { ArticlesPage } from './components/ArticlesPage'
import { getArticles } from './api'
import { Loading } from './components/Loading'
import { HomePage } from './components/HomePage'
import { Topics } from './components/Topics'
import { ArticlesByTopic } from './components/ArticlesByTopic'
import { Error } from './components/Error'

function App() {
  const [loggedInUser] = useState("tickle122")


  return (
   
      <div className="App">
        <Header className="header"/>
        <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/articles"
          element={<ArticlesPage loggedInUser={loggedInUser} />}
        />
        <Route path="/articles/:article_id" element={<ArticleInfo  loggedInUser={loggedInUser}  />} />
        <Route path="/topics/:topic" element={<ArticlesByTopic />} />
         <Route path="/topics" element={<Topics />} />
         <Route path="*" element={<Error />} />
   
        </Routes>
        <Footer className="footer"/>
        
      </div>
  
  )
}

export default App
