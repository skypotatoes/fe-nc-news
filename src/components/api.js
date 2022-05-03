import axios from 'axios'

const baseURL = 'https://project-news-server.herokuapp.com/api'

export const getArticles = (topic) => {
  return axios
    .get(`${baseURL}/articles`, { params: { topic } })
    .then(({ data }) => {
      return data.articles
    })
}

export const getTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics
  })
}

export const getSingleArticle = (article_id) => {
  return axios.get(`${baseURL}/articles/${article_id}`).then(({ data }) => {
    return data.article
  })
}

export const getComments = (article_id) => {
  return axios
    .get(`${baseURL}/articles/${article_id}/comments`)
    .then(({ data }) => data.comments)
}
export const incrementVote = (num, article_id) => {
  return axios
    .patch(`${baseURL}/articles/${article_id}`, { inc_votes: num })
    .then(({ data }) => data.article)
}

export const postComment = (article_id, username, body) => {
  return axios.post(`${baseURL}/articles/${article_id}/comments`, {
    username: username,
    body: body,
  })
}
