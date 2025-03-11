import Header from './Header';
import Synopsis from './Synopsis';
import Casts from './Casts';
import Directors from './Directors';
import Introduce from './Introduce'; 
import BottomSheet from './BottomSheet';
import { VELMA, ROXIE, BILLY, MAMA, AMOS, MARY, ENSEMBLE, DIRECTORS } from '../data';
import './Home.css';


function Information() {

  const CAST_LIST = [
    { title: '벨마 켈리', data: VELMA },
    { title: '록시 하트', data: ROXIE },
    { title: '빌리 플린', data: BILLY },
    { title: '마마 모튼', data: MAMA },
    { title: '에이모스 하트', data: AMOS },
    { title: '메리 선샤인', data: MARY },
    { title: '앙상블', data: ENSEMBLE },
  ];

  return (
    <>
      <div className="hidden-div"></div>
      <Header />
      <main>

        <h1>Synopsis</h1>
        <section className="synopsis">
          <Synopsis />
        </section>

        <h1>Casts</h1>
        <section className="casts">
          {CAST_LIST.map(({ title, data }) => (
            <div key={title}>
              <h2>{title}</h2>
              <ul>{data.map((item) => <Casts key={item.name} {...item} />)}</ul>
            </div>
          ))}
        </section>

        <h1>Directors</h1>
        <section className="casts">
          <h2>연출진</h2>
          <ul>
            {DIRECTORS.map((item) => <Directors key={item.name} {...item} />)}
          </ul>
        </section>

        <h1>Introduce</h1>
        <section className="introduce">
          <Introduce />
        </section>

        <div className="hidden-div"></div>
        <div className="hidden-div"></div>
        <BottomSheet />
      </main>
    </>
  );
}

export default Information;
