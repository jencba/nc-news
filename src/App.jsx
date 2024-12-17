import { useState, useEffect} from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ArticleInfo } from './components/Articleinfo'
import { Routes, Route } from 'react-router-dom'
import { ArticlesPage } from './components/ArticlesPage'
import { getArticles } from './api'
import { Loading } from './components/Loading'
import { HomePage } from './components/HomePage'

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getArticles()
      .then(({ articles }) => {
        setArticles(articles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return  <Loading />
    
  }
  return (
   
      <div className="App">
        <Header />
        <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/articles"
          element={<ArticlesPage articles={articles} setArticles={setArticles} loading={loading} />}
        />
        <Route path="/articles/:article_id" element={<ArticleInfo loading={loading} setLoading={setLoading}/>} />
        </Routes>
        <Footer />
        
      </div>
  
  )
}

export default App
