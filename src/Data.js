import React, { useState } from "react";

function Data() {
  const [data, setData] = useState({});
  fetch("/data")
    .then((res) => res.json())
    .then(
      (data) => setData(data),
      () => {
        console.log("data read : ", data);
      }
    )
    .catch((e) => console.error(e));

  return (
    <div>
      {data.first} {data.second}
      {/* {data[0].date} {data[0].weight} {data[0].exercise} {data[0].story} */}
      {/* {data[1].date} {data[1].weight} {data[1].exercise} {data[1].story}
      {data[2].date} {data[2].weight} {data[2].exercise} {data[2].story}
      {data[3].date} {data[3].weight} {data[3].exercise} {data[3].story} */}
    </div>
  );
}

export default Data;
