import React, { useContext, useState, useEffect } from "react";
import { Loading } from "./Loading";
import { getCommentsById } from "../api";
import { LoadingContext } from "../context/LoadingProvider";
import { useParams } from "react-router-dom";
import { CommentCard } from "./CommentCard";

export const CommentsList= () => {
    const { article_id } = useParams()
    const [comments, setComments]= useState([])
    const {loading, setLoading} = useContext(LoadingContext);

    useEffect(() => {
        getCommentsById(article_id)
          .then((data) => {
            const { comments} = data
            setComments(comments)
            setLoading(false);
          })
          .catch((err) => console.error(err));
      }, [article_id]);
    
      if (loading) {
        return  <Loading />
        
      }
  return (

    <section className="comments-list">
    <h2>Comments</h2>
    {comments.length > 0 ? (
      comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))
    ) : (
      <p>No Comments</p> 
    )}
  </section>
   

   
  );
};