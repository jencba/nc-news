import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ArticlesCard = ({ article }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <Card className="article-card-container">
        <Card.Img
          variant="top"
          src={article.article_img_url}
          alt={`Image for ${article.title}`}
          className="article-card-img"
        />
        <Card.Body>
        <Card.Title className= "article-card-title">
        {article.title
        .split(' ') 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(' ')} 
        </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{article.author}</Card.Subtitle>
          <Card.Text>{article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}</Card.Text>
          <Card.Text>{new Date(article.created_at).toLocaleDateString()}</Card.Text>
          <Link to={`/articles/${article.article_id}`}>
            <Button variant="primary">Read More</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
