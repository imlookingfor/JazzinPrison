import { useState } from "react";
import { SCHEDULE } from "../data";


export default function Schedule() {
  const [ selectedDate, setSelectedDate ] = useState("firstDay")

  return (
    <div>
      <menu className="date-select-btn">
        <ul>
          <li><button onClick={() => setSelectedDate("firstDay")}>4월 19일</button></li>
          <li><button onClick={() => setSelectedDate("secondDay")}>4월 20일</button></li>
        </ul>
      </menu>
      <div>{SCHEDULE[selectedDate].table}</div>
    </div>
  )

}

