import React, { useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById } from "../api";
import { Loading } from "./Loading";

import { CommentsList } from "./CommentsList";

export const ArticleInfo = ({loading, setLoading}) => {
  const { article_id } = useParams()
  const [article, setArticle] = useState({});


  useEffect(() => {
    getArticleById(article_id)
      .then((data) => {
        setArticle(data.article)
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [article_id]);

  if (loading) {
    return (
      <Loading />
    );
  }

  

  if (!article.title) {
    return <p>Article not found!</p>;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <p>
        <strong>Author:</strong> {article.author} | <strong>Published:</strong>{" "}
        {new Date(article.created_at).toLocaleDateString()} |{" "}
        <strong>Topic:</strong> {article.topic}
      </p>
      <img
        src={article.article_img_url}
        alt={article.title}
        className="article-img"
      />
      <p className="article-body">{article.body}</p>
      <Link to="/articles">
        <button className=" btn-secondary">Back to Articles</button>
      </Link>
      <CommentsList loading={loading} setLoading={setLoading}/>
    </div>
  );
};
