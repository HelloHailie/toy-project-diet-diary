const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3003;
const dummyData = [
  {
    id: "1",
    date: new Date(2022, 6, 25),
    weight: "60",
    exercise: "달리기",
    story:
      "오늘 점심으로 마라탕을 먹고 어느정도 소화를 시키고 달렸다. 이정도면 칼로리 소모가 다 됐겠지?",
  },
  {
    id: "2",
    date: new Date(2022, 6, 26),
    weight: "61.5",
    exercise: "걷기",
    story:
      "저녁을 먹고 1시간 정도 집 근처를 걸었다. 빠른 걸음으로 걸어야 칼로리 소모가 많이 된다던데 오늘은 너무 천천히 걸었던 것 같다.",
  },
  {
    id: "3",
    date: new Date(2022, 6, 27),
    weight: "61",
    exercise: "달리기",
    story:
      "친구 생일 파티를 다녀왔다. 너무 많이 먹었은 것 같아 집 앞 하천을 뛰었다. 덥다.",
  },
  {
    id: "4",
    date: new Date(2022, 6, 28),
    weight: "61.2",
    exercise: "달리기",
    story:
      "어제 친구 생일 파티에서 많이 먹긴 했나보다. 어제 30분 넘도록 뛰었는데도 조금 불어있다. 그래서 오늘도 달렸다. ",
  },
];
app.use(cors());
app.use(express.json());

app.get("/data", (req, res) => {
  // const dummyData = { first: "lee", second: "hi" };
  res.json(dummyData);
});

app.post("/data", (req, res) => {
  console.log(req.body);
  dummyData.unshift({ ...req.body, id: dummyData.length + 1 + "" });
  res.status(201).json(dummyData);
});

app.listen(PORT, () => {
  console.log(`server running on PORT http://localhost:${PORT}`);
});
