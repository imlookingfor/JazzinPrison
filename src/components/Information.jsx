import { CAST, DIRECTORS } from '../data'
import CastCard from './CastCard'
import Introduce from './Introduce'
import BottomSheet from './BottomSheet'

export default function Information() {
  return (
    <main className="has-sheet">
      <h1 className="title">Casts</h1>
      <section className="card">
        <ul className="cast-grid">
          {CAST.map((m) => <CastCard key={m.photo} {...m} />)}
        </ul>
      </section>

      <h2 className="title">Directors</h2>
      <section className="card">
        <h3 className="subtitle">연출진</h3>
        <ul className="director-list">
          {DIRECTORS.map((d) => (
            <li key={d.name + d.role}>
              <strong>{d.name}</strong>
              <span>{d.role}</span>
            </li>
          ))}
        </ul>
      </section>

      <h2 className="title">Introduce</h2>
      <section className="card introduce">
        <Introduce />
      </section>

      <BottomSheet />
    </main>
  )
}
