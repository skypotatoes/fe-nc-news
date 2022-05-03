import { useState } from 'react'
import { postComment } from './api'

export default function PostComment(article_id, comments, setComments) {
  const [comment, setComment] = useState('')
  // hard-coded a username for now until login is sorted

  function handlePostComment(username, comment) {
    postComment(article_id.article_id, username, comment)
  }

  return (
    <section className="postcomment">
      <form>
        <label>
          Your comment:
          <input
            type="text"
            name="comment"
            onChange={(event) => {
              setComment(event.target.value)
            }}
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault()
            handlePostComment('tickle122', comment)
            setComments(comments)
          }}
        >
          Post Comment
        </button>
      </form>
    </section>
  )
}
