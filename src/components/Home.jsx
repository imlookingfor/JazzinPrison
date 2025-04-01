import { Link } from 'react-router-dom'
// import logoImg from '../assets/logo.png'
import './Home.css'


function Home() {

  return (
    <>

      <div className='hidden-div'></div>
      <div className='home-div'>
        {/* <img className="home-logo" src={logoImg} alt="" /> */}
        <h1 className='home-h1'>두 여자 이야기</h1>
      </div>
      <div className='hidden-div'></div>
      <div className='home-btn-group'>
        {/* {<button onClick={() => window.open("#")}>예매하기</button>} */}
        <Link to='/info'><button className='home-btn'>공연소개</button></Link>
        <Link to='/reservation'><button className='home-btn'>예매하기</button></Link>
      </div>
      <div className='hidden-div'></div>

    </>

  )
}

export default Home
