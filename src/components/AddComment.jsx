import React, { useState } from "react";
import { addComment } from "../api";
import { Error } from "./Error";

export const AddComment = ({ article_id, addCommentToList, loggedInUser }) => {
  const [commentInput, setCommentInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError]= useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!commentInput) {
      setError("Input cannot be empty.");
      return;
    }

    setIsSubmitting(true);
    setError(null)
    addComment(article_id, {username: loggedInUser, body: commentInput})
      .then((newComment) => {
        addCommentToList(newComment.comment);
        setSuccessMessage("Comment posted successfully!");
        setCommentInput("");
        setIsSubmitting(false)
      })
      .catch((error) => {
    setError(
      error.response?.data?.msg || "Something went wrong. Please try again."
    );
        setIsSubmitting(false);
      });
  };

  return (
    <section className="post-comment">
      <h3>Add a Comment</h3>
      {error && <Error message={error} />}
      <form onSubmit={handleSubmit}>
        <p><strong>Logged in as: </strong> {loggedInUser}</p>
        <br />
        <label htmlFor="commentBody">Comment:</label>
        <textarea
          id="commentBody"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          placeholder="Write your comment here..."
          disabled={isSubmitting}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Posting..." : "Post Comment"}
        </button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </section>
  );
};
