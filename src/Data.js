import React, { useState } from "react";
import "./Data.css";
import DiariesDate from "./components/Diaries/DiariesDate";

function Data({ data }) {
  // const year = data.date.getFullYear();
  // const month ={data}.date.getMonth() + 1;
  // const date = {data.date}.getDate();
  // const showFilteredDate = `${year}-${month <= 10 ? "0" + month : month}-${
  //   date <= 10 ? "0" + date : date
  // }`

  // const year = data.date.getFullYear();
  // const month = data.date.getMonth() + 1;
  // const date = data.date.getDate();
  // const showFilteredDate = `${year}-${month <= 10 ? "0" + month : month}-${
  //   date <= 10 ? "0" + date : date
  // }`;

  // const month = data.date.toLocaleString("en-US", { month: "long" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // let year = data.date.getFullYear();

  return (
    <div>
      {data.map((data) => {
        return (
          <li key={data.id} className='data-list'>
            <DiariesDate date={data.date}></DiariesDate>
            <div>{data.weight}kg</div>
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
