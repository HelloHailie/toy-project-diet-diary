import React, { useState } from "react";
import "./Data.css";
import DiariesDate from "./components/Diaries/DiariesDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import styled from "styled-components";
import DiaryForm from "./components/NewDiary/DiaryForm";
import Modal from "./components/Diaries/Modal";

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: grid;
  place-items: center;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: "dialog",
}))`
  border-radius: 10px;
  background-color: #ffffff;
  width: 600px;
  height: 200px;

  > span.close-btn {
    margin-top: 5px;
    cursor: pointer;
  }

  > div.desc {
    margin-top: 10px;
    color: black;
  }
`;

function Data({ data, setData }) {
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

  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
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
                onClick={openModalHandler}
                // onClick={() => {
                //   updateBtnHandler(data.story);
                // }
                // }
              />
            </span>
            {isOpen === true ? (
              <ModalBackdrop onClick={openModalHandler}>
                <ModalView onClick={(e) => e.stopPropagation()}>
                  <span onClick={openModalHandler} className='close-btn'>
                    &times;
                  </span>
                  <div className='desc'>
                    <Modal
                      data={data}
                      setData={setData}
                      // date={date}
                      // weight={weight}
                      // exercise={exercise}
                      // story={story}
                    />
                  </div>
                </ModalView>
              </ModalBackdrop>
            ) : null}
          </li>
        );
      })}
    </div>
  );
}

export default Data;
