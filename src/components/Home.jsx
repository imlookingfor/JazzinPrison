import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="home">
      <h1 className="home-title">두 여자 이야기</h1>
      <nav className="home-actions" aria-label="바로가기">
        <Link className="btn btn--big" to="/info">공연소개</Link>
        <Link className="btn btn--big" to="/reservation">예매하기</Link>
      </nav>
    </section>
  )
}
