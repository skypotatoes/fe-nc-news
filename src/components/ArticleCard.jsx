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
    <li className="articlecard">
      <h1>
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </h1>
      <dl>
        <dt>ID: {article_id}</dt>
        <dt>Topic: {topic}</dt>
        <dt>Author: {author}</dt>
        <dt>Created: {created_at.slice(0, 9)}</dt>
        <dt>Votes: {votes}</dt>
        <dt>This article has {comment_count} comments</dt>
      </dl>
    </li>
  )
}
