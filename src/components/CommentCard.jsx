import React from "react";
import { DeleteComment } from "./DeleteComment";



export const CommentCard = ({ comment, removeCommentFromList, loggedInUser }) => {
  return (
    <div className="comment-card">
      <p><strong>{comment.author}</strong> says:</p>
      <p>{comment.body}</p>
      <p><small>votes:{comment.votes}</small></p>
      <p><small>{new Date(comment.created_at).toLocaleDateString()}</small></p>
      {comment.author === loggedInUser && (
        <DeleteComment
          commentId={comment.comment_id}
          removeCommentFromList={removeCommentFromList}
        />
      )}

    </div>
  );
};
