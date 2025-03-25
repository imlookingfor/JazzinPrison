import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.png'


export default function Header() {
  return(
    <header>
      <Link to='/'><img className='logo' src={logoImg}/></Link>
      {/* <p>
        신사 숙녀 여러분! 환영합니다.
      </p>
      <p>
        오늘 여러분은 살인과 탐욕, 부패, 폭력, 사기, 간통, 
      </p>
      <p>
        그리고 배신이 가득 담긴 이야기를 감상하시게 될 겁니다.
      </p>
      <p>
        바로 우리 모두가 매우 소중하게 여기는 그런 것들이죠. 
      </p>
      <p>
        감사합니다!
      </p> */}
      <div className="hidden-div"></div>
  </header>
  )
}


