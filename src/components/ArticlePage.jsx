import { useEffect, useState } from 'react'
import { getSingleArticle } from './api'
import { useParams } from 'react-router-dom'

export default function ArticlePage() {
  const { article_id } = useParams()
  const [article, setArticle] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    getSingleArticle(article_id).then((SingleArticle) => {
      setArticle(SingleArticle)
      setIsLoading(false)
    })
  }, [article_id])
  if (isLoading) return <h2>Loading...</h2>
  return (
    <section className="article">
      <h1>{article.title}</h1>
      <dl>
        <dt>ID: {article.article_id}</dt>
        <dt>{article.topic}</dt>
        <dt>{article.author}</dt>
        <dt>{article.created_at}</dt>
      </dl>
      <p className="article-body">{article.body}</p>
      <dl>
        <dt>Votes: {article.votes}</dt>
        <dt>Comment Count: {article.comment_count}</dt>
      </dl>
    </section>
  )
}
