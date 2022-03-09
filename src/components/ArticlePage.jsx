import { useEffect, useState } from 'react'
import { getSingleArticle, incrementVote } from './api'
import { useParams } from 'react-router-dom'
import ErrorPage from './ErrorPage'

export default function ArticlePage() {
  const { article_id } = useParams()
  const [article, setArticle] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [voteError, setVoteError] = useState('')
  const [votes, setVotes] = useState(0)

  useEffect(() => {
    setError(null)
    setIsLoading(true)
    getSingleArticle(article_id)
      .then((SingleArticle) => {
        setArticle(SingleArticle)
        setVotes(article.votes)
        setIsLoading(false)
      })
      .catch(
        ({
          response: {
            data: { msg },
            status,
          },
        }) => {
          setError({ msg, status })
          setIsLoading(false)
        },
      )
  }, [article_id, article.votes])

  console.log(votes)

  function handleClick(num) {
    setVotes((votes) => votes + num)
    incrementVote(num, article_id).catch((error) => {
      setVotes((votes) => votes - num)
      setVoteError('Something went wrong! Please try again')
    })
  }

  if (isLoading) return <h2>Loading...</h2>
  if (error) return <ErrorPage status={error.status} msg={error.msg} />
  return (
    <section className="article">
      <h1>{article.title}</h1>
      <dl>
        <dt>ID: {article.article_id}</dt>
        <dt>{article.topic}</dt>
        <dt>{article.author}</dt>
        <dt>{article.created_at}</dt>
      </dl>
      <p className="article-body">{article.body}</p>
      <dl>
        <dt>
          Votes: {votes}
          <button
            onClick={() => {
              handleClick(1)
            }}
          >
            Upvote
          </button>
          <button
            onClick={() => {
              handleClick(-1)
            }}
          >
            Downvote
          </button>
        </dt>
        <p>{voteError}</p>
        <dt>Comment Count: {article.comment_count}</dt>
      </dl>
    </section>
  )
}
