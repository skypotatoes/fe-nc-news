import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

export default function Header() {
  return (
    <h1 className="title">
      <Link to="/">nc-news</Link>
    </h1>
  )
}
