import Header from './Header'
import Synopsis from './Synopsis'
import Casts from './Casts'
import Directors from './Directors'
import Introduce from './Inroduce'
import { VELMA, ROXIE, BILLY, MAMA, AMOS, MARY, ENSEMBLE, DIRECTORS } from '../data'

import './Home.css'
import BottomSheet from './BottomSheet'


function Information() {
  return (
    <>
      <div className='hidden-div'></div>

      <Header />

      <main>

        <h1>Synopsis</h1>
        <section className='synopsis'>
          <Synopsis />
        </section>

        <h1>Casts</h1>
        <section className='casts'>
          <h2>벨마 켈리</h2>
          <ul>
            {VELMA.map((item) => <Casts key={item.name} {...item} />)}
          </ul>

          <h2>록시 하트</h2>
          <ul>
            {ROXIE.map((item) => <Casts key={item.name} {...item} />)}
          </ul>

          <h2>빌리 플린</h2>
          <ul>
            {BILLY.map((item) => <Casts key={item.name} {...item} />)}
          </ul>

          <h2>마마 모튼</h2>
          <ul>
            {MAMA.map((item) => <Casts key={item.name} {...item} />)}
          </ul>

          <h2>에이모스 하트</h2>
          <ul>
            {AMOS.map((item) => <Casts key={item.name} {...item} />)}
          </ul>

          <h2>메리 선샤인</h2>
          <ul>
            {MARY.map((item) => <Casts key={item.name} {...item} />)}
          </ul>

          <h2>앙상블</h2>
          <ul>
            {ENSEMBLE.map((item) => <Casts key={item.name} {...item} />)}
          </ul>
        </section>

        <h1>Directors</h1>
        <section className='casts'>
          <h2>연출진</h2>
          <ul>
            {DIRECTORS.map((item) => <Directors key={item.name} {...item}/>)}
          </ul>
        </section>

        <h1>Introduce</h1>
        <section className='introduce'>
          <Introduce />

        </section>

        <div className='hidden-div'></div>



      <BottomSheet />
      </main>

 
    </>
  )
}

export default Information;