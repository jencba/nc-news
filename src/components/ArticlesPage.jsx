import React from "react";
import { useState, useEffect } from "react";
import { getArticles } from "../api";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

export const ArticlesPage=() => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
  
    
  useEffect(() => {
    getArticles()
      .then(({articles}) => {
        setArticles(articles);
        setLoading(false)
      })
      .catch((err) => {console.log(err)});
  }, []);

  
  if (loading) {
    return (
      <div className="loading-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  
  
    return (
      <div className="articles-container">
        {articles.map((article) => (
          <div key={article.article_id} className="article-card">
            <Card style={{ width: '18rem', margin: '10px auto' }}>
                <Card.Img variant="top" src={article.article_img_url} alt={`Image for ${article.title}`} className="article-card-img"/>
      <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Subtitle>{article.author}</Card.Subtitle>
              <Card.Text>{article.topic}</Card.Text>
              <Card.Text>{new Date(article.created_at).toLocaleDateString()}</Card.Text>
              <Link to={`/articles/${article.article_id}`} className="article-link">
                <Button variant="primary">Read More</Button>
              </Link>
            </Card.Body>
    </Card>

          </div>
        ))}
      </div>
    );
  }
  
