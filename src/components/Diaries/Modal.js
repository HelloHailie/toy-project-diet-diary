import React, { useState } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

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
  const [photo, setPhoto] = useState(data.weight);
  const [exercise, setExercise] = useState(data.exercise);
  const [story, setStory] = useState(data.story);

  console.log(data.id);

  const updateSubmitHandler = async (id) => {
    // id.preventDefault();
    console.log(id);

    const inputData = {
      // id: dataId,
      date: new Date(date),
      weight: weight,
      photo: photo,
      exercise: exercise,
      story: story,
    };
    console.log(inputData);
    const updateResponse = await axios.patch("/data", inputData);
    setData(updateResponse.data);
  };

  //const correctId = data.filter((e) => e.id === props.id);
  //console.log(correctId);
  // const index = data.findIndex((data) => data.id === id);
  // const newOne = [...data];
  // newOne.splice();

  return (
    <form>
      <div>
        <div>
          {/* <label>오늘도 해피데이</label> */}
          <div className='bigbox'>
            <label>날짜</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              defaultValue={date}
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
              defaultValue={data.weight}
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
              defaultValue={data.exercise}
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
              defaultValue={data.story}
              onChange={(e) => {
                setStory(e.target.value);
              }}
              placeholder='식단이나 운동에 대해 적어주세요.'
            ></textarea>
            <button
              type='submit'
              id='submit'
              onClick={() => updateSubmitHandler(data.id)}
            >
              수정 완료
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Modal;
