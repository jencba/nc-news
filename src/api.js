import axios from "axios";

const api = axios.create({
  baseURL: "https://jennifers-first-web-service.onrender.com/api",
});

export const getArticles = () => {
    return api.get(`/articles`).then(({ data }) => {
            return data;
          });
        };



export const getArticleById = (article_id) => {
    return api.get(`/articles/${article_id}`).then(({ data }) => {
            return data
            });
          };
    
export const getCommentsById = (article_id) => {
    return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
             return data;
                    });
                  };

export const voteOnArticle = (article_id, voteChange) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: voteChange })
    .then(({ data }) => data);
};

export const addComment =(article_id, comment) => {
    return api.post(`/articles/${article_id}/comments`, comment).then(({ data }) => {
        return data;
})
}

export const deleteComment =(comment_id, username) => {
    return api.delete(`/comments/${comment_id}`, { data: { username } } ).then(({ data }) => {
        return data;
})
}
                


