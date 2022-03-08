import { useEffect, useState } from 'react'
import { getTopics } from './api'
import { Link } from 'react-router-dom'

export default function ChooseTopic() {
  const [topics, setTopics] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    getTopics().then((topicsData) => {
      setTopics(topicsData)
      setIsLoading(false)
    })
  }, [])
  if (isLoading) return <h2>Loading...</h2>
  return (
    <section className="topicsbar">
      <Link className="topicslink" to="/">
        all
      </Link>
      {topics.map((topic) => {
        return (
          <Link
            key={topic.slug}
            className="topicslink"
            to={`/topics/${topic.slug}`}
          >
            {topic.slug}
          </Link>
        )
      })}
    </section>
  )
}
