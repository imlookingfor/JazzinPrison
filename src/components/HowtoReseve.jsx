
export default function HowtoReserve() {
  return (
    <div>
      <h2>예매방법</h2>
      <button className="reserve-btn" onClick={() => window.open("https://forms.gle/hGtLT9ihVsyETaUK9")}>접수하러 가기</button>
      <div className="reserve-div">
        <p>위 링크를 통해 구글폼 양식을 작성하신 후 접수히사면 예매가 완료됩니다.</p>
        <p>
          장소는 예매 완료하신 분들에 한해 공연 전날 문자로 안내해 드리고 있습니다.
        </p>
        <p>티켓은 공연 한 시간 전부터 공연장에서 수령하실 수 있습니다.</p>
        <p>예매 시 유의사항 : 애들은 가라! 14세 이상 관람가</p>
      </div>
    </div>

  )
}


