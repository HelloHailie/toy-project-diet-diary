import React, { useState } from "react";
import Data from "./Data";

import NewDiary from "./components/NewDiary/NewDiary";
import Diaries from "./components/Diaries/Diaries";
import DiariesList from "./components/Diaries/DiariesList";

const DUMMY_DATA = [
  {
    id: "1",
    // date: new Date(2022, 6, 25),
    // weight: "60",
    // exercise: "달리기",
    story:
      "오늘 점심으로 마라탕을 먹고 어느정도 소화를 시키고 달렸다. 이정도면 칼로리 소모가 다 됐겠지?",
  },
  {
    id: "2",
    // date: new Date(2022, 6, 26),
    // weight: "61",
    // exercise: "걷기",
    story:
      "저녁을 먹고 1시간 정도 집 근처를 걸었다. 빠른 걸음으로 걸어야 칼로리 소모가 많이 된다던데 오늘은 너무 천천히 걸었던 것 같다.",
  },
];

const App = () => {
  const [data, setData] = useState(DUMMY_DATA);

  const addDiariesHandler = () => {};

  // const content = <DiariesList items={data} />;

  return (
    <div>
      <header></header>
      <NewDiary onAddDiaries={addDiariesHandler} />
      <DiariesList items={data} />
      {/* <Diaries items={data} /> */}
      <Data />
    </div>
  );
};

export default App;
