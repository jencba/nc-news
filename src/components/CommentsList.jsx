import React, { useState, useEffect } from "react";
import { getCommentsById } from "../api";
import { useParams } from "react-router-dom";
import { CommentCard } from "./CommentCard";
import { AddComment } from "./AddComment";

export const CommentsList= () => {
    const { article_id } = useParams()
    const [comments, setComments]= useState([])

    useEffect(() => {
        getCommentsById(article_id)
          .then((data) => {
            const { comments} = data
            setComments(comments)
          })
          .catch((err) => console.error(err));
      }, [article_id]);

      const addCommentToList = (newComment) => {
        setComments((currentComments) => [newComment, ...currentComments]);
      };
    
      return (
        <section className="comments-section">
          <h2>Comments</h2>
          <AddComment article_id={article_id} addCommentToList={addCommentToList} />
          {comments.length > 0 ? (
            comments.map((comment) => (
              <CommentCard key={comment.comment_id} comment={comment} />
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </section>
      );
    };