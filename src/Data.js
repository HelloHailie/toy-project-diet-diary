import React, { useState } from "react";
import "./Data.css";
import DiariesDate from "./components/Diaries/DiariesDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Data({ data, setData }) {
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

  const deleteBtnHandler = async (dataId) => {
    // console.log(dataId);
    // const deleteData = { id: dataId };
    // setData(data.filter((el) => el.id !== dataId));
    const deleteResponse = await axios.delete("/data", {
      data: { id: dataId },
    });
    console.log(deleteResponse);
    console.log(deleteResponse.data);
    setData(deleteResponse.data);
  };

  // const updateBtnHandler = async (dataId) => {
  //   // console.log(dataId);
  //   // const deleteData = { id: dataId };
  //   // setData(data.filter((el) => el.id !== dataId));
  //   const updateResponse = await axios.put("/data", {
  //     data: { story: dataId },
  //   });
  //   console.log(updateResponse);
  //   console.log(updateResponse.data);
  //   setData(updateResponse.data);
  // };

  // dummydata 내림차순으로 정리하기
  const sortedData = data.sort((f, s) => {
    const idF = f.id;
    const idS = s.id;
    if (idF > idS) {
      return -1;
    }
    if (idF < idS) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      {sortedData.map((data) => {
        return (
          <li key={data.id} className='data-list'>
            <DiariesDate date={data.date}></DiariesDate>
            {/* <div>{data.date}</div> */}
            <div>{data.weight}kg</div>
            <img src={data.photo} />
            <div>{data.exercise}</div>
            <div>{data.story}</div>
            <span id='deleteBtn'>
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={() => {
                  deleteBtnHandler(data.id);
                }}
              />
            </span>
            <span id='updateBtn'>
              <FontAwesomeIcon
                icon={faPenNib}
                // onClick={() => {
                //   updateBtnHandler(data.story);
                // }
                // }
              />
            </span>
          </li>
        );
      })}
    </div>
  );
}

export default Data;
