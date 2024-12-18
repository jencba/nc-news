import React, { useState } from "react";
import { deleteComment } from "../api";

export const DeleteComment = ({ commentId, removeCommentFromList }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete this comment?")) return;

    setIsDeleting(true);
    deleteComment(commentId)
      .then(() => {
        removeCommentFromList(commentId); 
        setIsDeleting(false);
      })
      .catch((error) => {
        alert(
          `Error: ${
            error.response && error.response.data
              ? error.response.data.msg
              : error.message
          }`
        );
        setIsDeleting(false);
      });
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="delete-button"
    >
      {isDeleting ? "Deleting..." : "Delete"}
    </button>
  );
};
