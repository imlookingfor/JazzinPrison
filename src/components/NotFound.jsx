import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="notfound">
      <h1 className="title">404</h1>
      <p>Not Found bro, 접속 again</p>
      <Link className="btn" to="/">처음으로</Link>
    </main>
  )
}
