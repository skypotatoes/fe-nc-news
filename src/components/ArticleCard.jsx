import { Link } from 'react-router-dom'

export default function ArticleCard({
  article_id,
  title,
  topic,
  author,
  created_at,
  votes,
  comment_count,
}) {
  return (
    <section className="articlecard">
      <p>ID: {article_id}</p>
      <h2>
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </h2>
      <p>Topic: {topic}</p>
      <p>Author: {author}</p>
      <p>Created: {created_at}</p>
      <p>Votes: {votes}</p>
      <p>This article has {comment_count} comments</p>
    </section>
  )
}
