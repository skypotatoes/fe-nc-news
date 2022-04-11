import { useEffect, useState } from 'react'
import { getComments } from './api'
import CommentCard from './CommentCard'
import PostComment from './PostComment'

export default function CommentList({ article_id }) {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(article_id).then((commentsData) => {
      setComments(commentsData)
    })
  }, [article_id])

  return (
    <section className="comments">
      Comments:
      {comments.map(({ comment_id, body, author, votes, created_at }) => {
        return (
          <CommentCard
            key={comment_id}
            comment_id={comment_id}
            body={body}
            author={author}
            votes={votes}
            created_at={created_at}
          />
        )
      })}
      <PostComment article_id={article_id} />
    </section>
  )
}
