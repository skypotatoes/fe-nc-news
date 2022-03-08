import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import ArticlePage from './components/ArticlePage'
import TopicPage from './components/Topicpage'

import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="/topics/:topic" element={<TopicPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
