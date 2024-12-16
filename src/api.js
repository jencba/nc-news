import axios from "axios";

const api = axios.create({
  baseURL: "https://jennifers-first-web-service.onrender.com/api",
});

export const getArticles = () => {
    return api.get(`/articles`).then(({ data }) => {
            return data;
          });
        };


// export const getBasket = () => {
//   return api.get(`/users/Ant/basket`).then(({ data }) => {
//     return data;
//   });
// };

// export const deleteItemFromBasket = (item_id) => {
//   return api.delete(`/users/Ant/basket/${item_id}`).then(({ data }) => {
//     return data;
//   });
// };
