import React from "react";
import { useState } from "react";
import { Loading } from "./Loading";
import { ArticleCard } from "./ArticlesCard";

export const ArticlesPage=({articles, setArticles},{loading}) => {
    const [sortBy, setSortBy] = useState('created');
    const [order, setOrder] = useState('desc'); 

 // Function to sort articles
 const sortArticles = (articles, sortBy, order) => {
    return [...articles].sort((a, b) => {
      let comparison = 0;
      if (sortBy === "topic") {
        comparison = a.topic.localeCompare(b.topic);
      } else if (sortBy === "author") {
        comparison = a.author.localeCompare(b.author);
      } else if (sortBy === "title") {
        comparison = a.title.localeCompare(b.title);
      } else if (sortBy === "created") {
        comparison = new Date(a.created_at) - new Date(b.created_at);
      } else if (sortBy === "comments") {
        comparison = a.comment_count - b.comment_count;
      } else if (sortBy === "votes") {
        comparison = a.votes - b.votes;
      }

      return order === "asc" ? comparison : -comparison;
    });
  };

 
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const sortedArticles = sortArticles(articles, sortBy, order);
  
  if (loading) {
    return  <Loading />
    
  }
  
  
    return (
        <div className="container">
          <div className="row">
            <label>
              Sort by:
              <select onChange={handleSortByChange} value={sortBy}>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="topic">Topic</option>
                <option value="created">Created</option>
                <option value="comments">Comments</option>
                <option value="votes">Votes</option>
              </select>
            </label>
    
            <label>
              Order:
              <select onChange={handleSortOrderChange} value={order}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </label>
          </div>
    
          <div className="articles-list">
            {sortedArticles.map((article) => (
              <ArticleCard key={article.article_id} article={article} />
            ))}
          </div>
        </div>
      );
    };
  
