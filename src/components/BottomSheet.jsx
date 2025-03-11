import { Link } from "react-router-dom";


export default function BottomSheet() {

  return (
    <div className="bottom-sheet">
      <Link to='/reservation'><button>예매하러 가기</button></Link>
    </div>
  );
}
