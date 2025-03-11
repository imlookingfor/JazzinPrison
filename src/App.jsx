import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx'
import Reservation from './components/Reservation.jsx';
import Information from './components/Information.jsx';
import NotFound from './components/NotFound.jsx';


function App() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/info" element={<Information />} />

        {/* 일치하는 경로가 없을 때 NotFound 컴포넌트 렌더링 */}
        <Route path="/*" element={<NotFound />} />

      </Routes>
    </div>
  )

};


export default App;

