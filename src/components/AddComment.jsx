import { useState } from 'react'
import { postComment } from './api'

export default function AddComment(props) {
  const [comment, setComment] = useState('')
  // hard-coded a username for now until login is sorted

  function handlePostComment(username, comment) {
    postComment(props.article_id, username, comment)
    setComment('')
  }

  return (
    <section className="postcomment">
      <form>
        <label>
          Your comment:
          <input
            type="text"
            name="comment"
            value={comment}
            onChange={(event) => {
              setComment(event.target.value)
            }}
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault()
            handlePostComment('tickle122', comment)
          }}
        >
          Post Comment
        </button>
      </form>
    </section>
  )
}
