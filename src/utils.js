import axios from 'axios';

const baseURL = 'https://gabor-nc-news.herokuapp.com/api';

export const getArticles = (topic, sorted_by, page) => {
  return axios
    .get(`${baseURL}/articles`, { params: { topic, sorted_by, p: page } })
    .then(({ data }) => {
      return data;
    });
};

export const getArticle = article_id => {
  return axios.get(`${baseURL}/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (article_id, page) => {
  return axios
    .get(`${baseURL}/articles/${article_id}/comments`, { params: { p: page } })
    .then(({ data }) => {
      return data;
    });
};

export const getTopics = () => {
  return axios.get(`${baseURL}/topics/`).then(({ data }) => {
    return data.topics;
  });
};

export const changeArticleVotes = (article_id, value) => {
  return axios
    .patch(`${baseURL}/articles/${article_id}`, { inc_votes: value })
    .then(({ data }) => {
      return data.article;
    });
};
export const changeCommentVotes = (comment_id, value) => {
  return axios.patch(`${baseURL}/comments/${comment_id}`, { inc_votes: value });
};

export const insertArticle = newArticle => {
  return axios.post(`${baseURL}/articles/`, newArticle).then(({ data }) => {
    return data.article;
  });
};

export const insertComment = (article_id, newComment) => {
  return axios
    .post(`${baseURL}/articles/${article_id}/comments/`, newComment)
    .then(({ data }) => {
      return data.comment;
    });
};

export const removeArticle = article_id => {
  return axios.delete(`${baseURL}/articles/${article_id}`);
};

export const removeComment = comment_id => {
  return axios.delete(`${baseURL}/comments/${comment_id}`);
};
