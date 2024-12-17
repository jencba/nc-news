import React, { useState } from "react";
import { voteOnArticle } from "../api";

export const Vote = ({ article_id, initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes);

  const handleVote = (voteChange) => {
    setVotes((prevVotes) => prevVotes + voteChange);


    voteOnArticle(article_id, voteChange)
      .catch((err) => {
        console.error("Error updating vote:", err);
        setVotes((prevVotes) => prevVotes - voteChange)
      
      });
  };

  return (
    <div className="vote-section">
      <h3>Votes: {votes}</h3>
      <div>
        <button onClick={() => handleVote(1)}>👍</button>
        <button onClick={() => handleVote(-1)}>👎</button>
      </div>
    </div>
  );
};
