export default function CommentCard({
  comment_id,
  body,
  author,
  votes,
  created_at,
}) {
  return (
    <div className="comment">
      <p className="comment-author">{author} commented...</p>
      <p className="comment-body">{body}</p>
      <dl className="comment-details">
        <dt>ID: {comment_id}</dt>
        <dt>Votes: {votes}</dt>
        <dt>Posted at: {created_at.slice(0, 9)}</dt>
      </dl>
    </div>
  )
}
