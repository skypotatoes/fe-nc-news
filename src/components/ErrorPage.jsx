import { Link } from 'react-router-dom'

export default function ErrorPage({ status, msg }) {
  if (!status) {
    status = 404
    msg = 'Path not found'
  }
  return (
    <main>
      <h2>
        status: {status}, message: {msg}
      </h2>
      <p>
        <Link to="/">Return to Home</Link>
      </p>
    </main>
  )
}
