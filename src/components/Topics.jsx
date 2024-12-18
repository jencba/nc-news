import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api"; 

export const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTopics()
      .then(({topics}) => {
        setTopics(topics || []);  
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching topics:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading topics...</div>;
  }

  return (
    <section className="topics-container">
      <header>
        <h2>Select a Topic</h2>
      </header>
      <nav>
        <ul>
          {topics.map((topic) => (
            <li key={topic.slug}>
              <Link to={`/topics/${topic.slug}`} aria-label={`View articles on ${topic.slug}`}>
                {topic.slug} 
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
