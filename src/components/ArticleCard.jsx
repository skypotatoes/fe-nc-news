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
    <section>
      <p>ID: {article_id}</p>
      <h2>{title}</h2>
      <p>Topic: {topic}</p>
      <p>Author: {author}</p>
      <p>Created: {created_at}</p>
      <p>Votes: {votes}</p>
      <p>This article has {comment_count} comments</p>
    </section>
  )
}
