import React from "react";
import { useState, useEffect } from "react";
import { Loading } from "./Loading";
import { ArticlesCard } from "./ArticlesCard";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "../api";

export const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";

  useEffect(() => {
    getArticles(sortBy, order)
      .then(({ articles }) => {
        setArticles(articles);
        setLoadingArticles(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setLoadingArticles(false);
      });
  }, [sortBy, order]);


  const handleSortByChange = (event) => {
    setSearchParams({ sort_by: event.target.value, order });
  };

  const handleSortOrderChange = (event) => {
    setSearchParams({ sort_by: sortBy, order: event.target.value });
  };

  if (loadingArticles) {
    return <Loading />;
  }

  return (
    <div>
      <div className="sorting-options">
        <label id="sort_by">Sort by:</label>
        <select id="sort_by" value={sortBy} onChange={handleSortByChange}>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
        <label id="sort_order">Order:</label>
        <select id="sort_order" value= {order} onChange={handleSortOrderChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
        </select>
      </div>
      <div className="articles-list">
        {articles.map((article) => (
          <ArticlesCard key={article.article_id} article={article} />
        ))}
      </div>
    </div>
  );
};
