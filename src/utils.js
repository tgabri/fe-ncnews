import axios from 'axios';

const basicURL = 'https://gabor-nc-news.herokuapp.com/api';

export const getData = () => {
  return axios.get(`${basicURL}/articles`).then(({ data }) => {
    return data.articles;
  });
};
