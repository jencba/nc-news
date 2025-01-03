import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById } from "../api";
import { Loading } from "./Loading";
import { Vote } from "./Vote";
import { CommentsList } from "./CommentsList";
import { Error } from "./Error";

export const ArticleInfo = ({ loggedInUser }) => {
  const { article_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState(null); // Start with null to handle "not found" gracefully
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null); // Reset error state before fetching
    getArticleById(article_id)
      .then((data) => {
        setArticle(data.article);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(
          err.response?.data?.msg || "An error occurred while loading the article."
        );
        setLoading(false);
      });
  }, [article_id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!article) {
    return <Error message="Article not found!" />;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <p>
        <strong>Author:</strong> {article.author} | <strong>Published:</strong>{" "}
        {new Date(article.created_at).toLocaleDateString()} |{" "}
        <strong>Topic:</strong> {article.topic}
      </p>
      <p><strong>Votes:</strong> {article.votes}</p>
      <img
        src={article.article_img_url}
        alt={article.title}
        className="article-img"
      />
      <p className="article-body">{article.body}</p>
      <Vote article_id={article_id} initialVotes={article.votes} />
      <Link to="/articles">
        <button className="btn-secondary">Back to Articles</button>
      </Link>
      <CommentsList loggedInUser={loggedInUser} />
    </div>
  );
};
