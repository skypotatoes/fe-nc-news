import { useEffect, useState } from 'react'
import { getComments } from './api'
import CommentCard from './CommentCard'

export default function CommentList(article_id) {
  const [comments, setComments] = useState([])
  console.log(article_id.article_id)
  useEffect(() => {
    getComments(article_id).then((commentsData) => {
      console.log('you are here')
      setComments(commentsData)
    })
  }, [article_id])

  return (
    <section>
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
    </section>
  )
}
