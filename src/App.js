import React, { useState, useEffect } from "react";
import NewDiary from "./components/NewDiary/NewDiary";
import Header from "./components/Diaries/Header";
import Data from "./Data";
import DiariesDate from "./components/Diaries/DiariesDate";

const App = () => {
  const [data, setData] = useState([]);

  async function Fetch() {
    const dataArr = await fetch("http://localhost:3003/data").then((res) =>
      res.json()
    );
    await setData(dataArr);
    // console.log(dataArr);
  }
  useEffect(() => {
    Fetch();
    // fetch("http://localhost:3003/data")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data);
    //     return data;
    //   })
    //   .then((data) => console.log(data))
    //   .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    const localData = localStorage.getItem("data");
  }, []);
  // const [selectedDiary, setSelectedDiary] = useState(null);
  // const onChangeSelectedDiary = (data) => {
  //   setSelectedDiary(data);
  // };

  // const correctValue = (data) => {
  //   data.filter(diary => diary.id === data.id? {...data,})
  // }

  return (
    <div>
      <Header />
      <NewDiary setData={setData} /*selectedDiary={selectedDiary}*/ />
      <Data
        data={data}
        setData={setData}
        // onChangeSelectedDiary={() => {
        //   onChangeSelectedDiary(data);
        // }}
      />
    </div>
  );
};

export default App;
