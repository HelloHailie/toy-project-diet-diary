import React, { useState } from "react";
import "./DiaryForm.css";
// import DatePicker from "react-datepicker"; 그냥 input 메서드 쓰기로 함.
import "react-datepicker/dist/react-datepicker.css";

const DiaryForm = (props) => {
  const [enteredDate, setEnteredDate] = useState(new Date());
  const [enteredWeight, setEnteredWeight] = useState("");
  // const [enteredPhoto, setEnteredPhoto] = useState("");
  const [enteredExercise, setEnteredExercise] = useState("");
  const [enteredStory, setEnteredStory] = useState("");

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  };

  const weightChangeHandler = (event) => {
    setEnteredWeight(event.target.value);
    console.log(event.target.value);
  };

  // const photoChangeHandler = (event) => {
  //   setEnteredPhoto(event.target.value);
  // };

  const exerciseChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredExercise(event.target.value);
  };

  const storyChangeHandler = (event) => {
    setEnteredStory(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const inputData = {
      date: new Date(enteredDate),
      일기: enteredStory,
    };
    // props.onAddDiaries(inputData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>오늘도 해피데이</label>
          <div className='bigbox'>
            <div>날짜</div>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              value={enteredDate}
              onChange={dateChangeHandler}
            />
            {/* <DatePicker selected={enteredDate} onChange={setEnteredDate} /> */}
            <label>몸무게</label>
            <input
              type='number'
              min='0'
              max='150'
              value={enteredWeight}
              onChange={weightChangeHandler}
            ></input>
            <label htmlFor='avatar'>식단 사진</label>
            <input
              type='file'
              id='avatar'
              name='avatar'
              accept='image/png, image/jpeg'
              // value={enteredPhoto}
              // onChange={photoChangeHandler}
            />
            <label>오늘의 운동</label>
            <select onChange={exerciseChangeHandler}>
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
              onChange={storyChangeHandler}
              value={enteredStory}
              placeholder='식단이나 운동에 대해 적어주세요.'
            ></textarea>
            <button id='submit'>게시글 올리기</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DiaryForm;
