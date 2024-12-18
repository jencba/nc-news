import React from "react";


export const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <p><strong>{comment.author}</strong> says:</p>
      <p>{comment.body}</p>
      <p><small>votes: {comment.votes}</small></p>
      <p><small>{new Date(comment.created_at).toLocaleDateString()}</small></p>
    </div>
  );
};
