import { getArticles } from './api'
import ArticleCard from './ArticleCard'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ArticleList() {
  const { topic } = useParams()
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    getArticles(topic).then((articleData) => {
      setArticles(articleData)
      setIsLoading(false)
    })
  }, [topic])
  if (isLoading) return <h2>Loading...</h2>
  return (
    <section>
      {articles.map(
        ({
          article_id,
          title,
          topic,
          author,
          created_at,
          votes,
          comment_count,
        }) => {
          return (
            <ArticleCard
              key={article_id}
              article_id={article_id}
              title={title}
              topic={topic}
              author={author}
              created_at={created_at}
              votes={votes}
              comment_count={comment_count}
            />
          )
        },
      )}
    </section>
  )
}
