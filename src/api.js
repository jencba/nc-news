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
            return data;
            });
          };
        


