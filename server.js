const express = require("express");
const app = express();
const PORT = 3003;

app.get("/data", (req, res) => {
  const dummyData = { first: "lee", second: "hi" };
  // const dummyData = {}
  // const dummyData = [
  //   {
  //     id: "1",
  //     date: "2022-06-23",
  //     weight: "seonmin",
  //     exercise: "달리기",
  //     story:
  //       "오늘 점심으로 마라탕을 먹고 어느정도 소화를 시키고 달렸다. 이정도면 칼로리 소모가 다 됐겠지?",
  //   },
  // ];
  res.json(dummyData);
});

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
