import { Link } from 'react-router-dom'

export default function BottomSheet() {
  return (
    <div className="bottom-sheet">
      <Link className="btn btn--wide" to="/reservation">예매하기</Link>
    </div>
  )
}
