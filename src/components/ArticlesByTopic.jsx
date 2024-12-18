import React, { useState, useEffect} from "react";
import {getArticlesByTopic } from "../api"; // Make sure this is the correct import
import { ArticlesCard } from "./ArticlesCard";
import { useParams } from "react-router-dom";
import { Loading } from "./Loading";


export const ArticlesByTopic = () => {
  const [articles, setArticles] = useState([]);
  const [loadingTopics, setLoadingTopics] = useState(true);
  const { topic } = useParams(); 

  useEffect(() => {
    getArticlesByTopic(topic)
      .then(({articles}) => {
        setArticles(articles);
        setLoadingTopics(false);
      })
      .catch((err) => {
        console.error("Error fetching articles by topic:", err);
        setLoadingTopics(false);
      });
  }, [topic]);

  if (loadingTopics) {
    return (<Loading />)
  }

  const selectedTopic = topic && typeof topic === "string" ? topic.charAt(0).toUpperCase() + topic.slice(1) : "Unknown Topic";
  return (
    <div className="articles-by-topic">
      <h2>Articles on {selectedTopic}</h2>
      <div className="row">
        {articles.length > 0 ? (
          articles.map((article) => (
            <ArticlesCard key={article.article_id} article={article} />
          ))
        ) : (
          <p>No articles found for this topic.</p>
        )}
      </div>
    </div>
  );
};
