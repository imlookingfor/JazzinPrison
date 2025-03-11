import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

//StrictMode: 
//잠재적인 문제 미리 감지 -> 개발 중에는 사용하는 것이 좋음
//개발 환경에서만 활성화되며 프로덕션 빌드에는 영향을 주지 않음
//개발 모드에서 일부 컴포넌트가 이중 랜더링될 수 있으나 
//이는 React가 부작용을 감지하기 위한 의도된 동작이므로 실제 앱 동작에는 문제되지 않음
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>

)