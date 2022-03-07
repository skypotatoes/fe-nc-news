import axios from 'axios'

const baseURL = 'https://project-news-server.herokuapp.com/api'

export const getArticles = () => {
  return axios.get(`${baseURL}/articles`).then(({ data }) => {
    return data.articles
  })
}
