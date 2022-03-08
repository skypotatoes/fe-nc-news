import { useEffect, useState } from 'react'
import { getSingleArticle } from './api'

export default function ArticlePage() {
  const [article, setArticle] = useState([])
  useEffect(() => {
    getSingleArticle(article_id).then((SingleArticle) => {
      setArticle(SingleArticle)
    })
  }, [])
  return (
    <>
      <h1>This is the article page</h1>
      <p>{article.article_id}</p>
      <p>{article.topic}</p>
      <p>{article.author}</p>
      <p>{article.created_at}</p>
      <p>{article.body}</p>
      <p>{article.votes}</p>
      <p>{article.comment_count}</p>
    </>
  )
}
