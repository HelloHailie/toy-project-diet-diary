import React, { useState } from "react";
import "./Data.css";

function Data({ data }) {
  // let dummyDate = {data.date};
  // const year = dummyDate.getFullYear();
  // const month = dummyDate.getMonth() + 1;
  // const date = dummyDate.getDate();
  // let hi = `${year}-${month <= 10 ? "0" + month : month}-${
  //   date <= 10 ? "0" + date : date
  // }`

  return (
    <div>
      {data.map((data) => {
        return (
          <li key={data.id} className='data-list'>
            <div>{data.date}</div>
            <div>{data.weight}</div>

            <img src={data.photo} />
            <div>{data.exercise}</div>
            <div>{data.story}</div>
          </li>
        );
      })}
    </div>
  );
}

export default Data;
