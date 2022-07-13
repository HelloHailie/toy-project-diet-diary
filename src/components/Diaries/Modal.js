import React, { useState } from "react";
import styled from "styled-components";

// import DatePicker from "react-datepicker"; 그냥 input 메서드 쓰기로 함.
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Resizer from "react-image-file-resizer";
import DiaryForm from "../NewDiary/DiaryForm";

// import React, { useState } from "react";
// import DiaryForm from "../NewDiary/DiaryForm";

// const Modal = ({ data }, { setData }) => {
//   return (
//     <>
//       <DiaryForm value={data.inputdata}></DiaryForm>
//     </>
//   );
// };

// export default Modal;

const Modal = ({ data, setData }) => {
  const [date, setDate] = useState(data.date);
  const [weight, setWeight] = useState(data.weight);
  const [exercise, setExercise] = useState(data.exercise);
  const [story, setStory] = useState(data.story);

  // let data.date=null;
  // data.weight=null
  // data.exercise=null
  // data.story = null;
  // for (let i = 0; i < data.length; i++) {
  //   if (data[i].id === id) {
  //     console.log(data);
  //   }
  // }
  // console.log(data);

  const updateSubmitHandler = (e) => {
    return console.log(e.target.value);
  };

  return (
    <form onClick={updateSubmitHandler}>
      <div>
        <div>
          {/* <label>오늘도 해피데이</label> */}
          <div className='bigbox'>
            <label>날짜</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            {/* <DatePicker selected={enteredDate} onChange={setEnteredDate} /> */}
            <label>몸무게</label>
            <input
              type='number'
              min='0'
              max='150'
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            ></input>
            <label htmlFor='avatar'>식단 사진</label>
            {/* <input type='file' accept='image/*' onChange={photoChangeHandler} />
            <img src={enteredPhoto.preview_URL} /> */}
            <input
              type='file'
              // accept='image/png, image/jpeg'
              // value={enteredPhoto}
            />
            <img src={data.photo} alt='' />
            <label>오늘의 운동</label>
            <select
              value={exercise}
              onChange={(e) => {
                setExercise(e.target.value);
              }}
            >
              <option>걷기</option>
              <option>달리기</option>
              <option>요가</option>
              <option>필라테스</option>
              <option>홈트레이닝</option>
            </select>
            <br></br>
            <label htmlFor='story'>Tell us your story:</label>
            <textarea
              rows='5'
              cols='33'
              value={story}
              onChange={(e) => {
                setStory(e.target.value);
              }}
              placeholder='식단이나 운동에 대해 적어주세요.'
            ></textarea>
            <button type='submit' id='submit'>
              수정 완료
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Modal;
