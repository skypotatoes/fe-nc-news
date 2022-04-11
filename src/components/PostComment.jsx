import { useState } from 'react'
import { postComment } from './api'

export default function PostComment(article_id) {
  const [comment, setComment] = useState('')
  //to handlePostComment, need access to article_id, username and body
  // hard-coded a username for now until login is sorted
  console.log('article_id in PostComment component:', article_id.article_id)
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
          }}
        >
          Post Comment
        </button>
      </form>
    </section>
  )
}
