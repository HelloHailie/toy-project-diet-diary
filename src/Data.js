import React, { useState, useEffect } from "react";
import "./Data.css";
import DiariesDate from "./components/Diaries/DiariesDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import styled from "styled-components";
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
  width: 900px;
  height: 430px;

  border-radius: 5px;
  box-shadow: 1px 2px 5px 1px skyblue;

  > span.close-btn {
    margin-top: 50px;
    cursor: pointer;
  }

  > div.desc {
    margin-top: 10px;
    color: black;
  }
`;

function Data({ data, setData }) {
  const [modalData, setModalData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const deleteBtnHandler = async (dataId) => {
    // console.log(dataId);
    // const deleteData = { id: dataId };
    // setData(data.filter((el) => el.id !== dataId));
    const deleteResponse = await axios.delete("/data", {
      data: { id: dataId },
    });
    //  console.log(deleteResponse);
    //  console.log(deleteResponse.data);
    setData(deleteResponse.data);
  };

  const updateBtnHandler = async (dataId) => {
    // console.log(dataId);
    setModalData(data.filter((el) => el.id === dataId.id)[0]);
    // console.log(modalData);
  };

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

  //const correctId = sortedData.filter((e) => e.id === enteredStory);
  // console.log(correctId);

  // const { date, weight, photo, exercise, story } = data;

  return (
    <div className='Data'>
      {sortedData.map((data) => {
        return (
          <li key={data.id} className='data-list'>
            <div className='data-lists-photo'>
              <img className='photo' src={data.photo} alt='' />
            </div>
            <div className='data-lists-data'>
              <DiariesDate className='date' date={data.date} />
              {/* <div>{data.date}</div> */}
              <div className='date'>{data.weight}kg</div>
              <div className='date'>{data.exercise}</div>
              <div className='date'>{data.story}</div>
            </div>
            <div className='data-lists-btn'>
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
                  onClick={() => {
                    updateBtnHandler(data);
                    openModalHandler();
                  }}
                  // onClick={() => {
                  //   updateBtnHandler(data);
                  // }}
                />
              </span>
            </div>
            {isOpen === true ? (
              <ModalBackdrop onClick={openModalHandler}>
                <ModalView onClick={(e) => e.stopPropagation()}>
                  <span onClick={openModalHandler} className='close-btn'>
                    &times;
                  </span>
                  <div className='desc'>
                    <Modal
                      data={modalData}
                      setData={setData}
                      // updateBtnHandler={data}
                      setIsOpen={setIsOpen}
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
