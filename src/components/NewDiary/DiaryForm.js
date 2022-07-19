import React, { useState, useEffect } from "react";
import "./DiaryForm.css";
// import DatePicker from "react-datepicker"; 그냥 input 메서드 쓰기로 함.
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Resizer from "react-image-file-resizer";

const DiaryForm = (props, { selectedDiary }) => {
  // let navigate = useNavigate();

  const [enteredDate, setEnteredDate] = useState(new Date());
  const [enteredWeight, setEnteredWeight] = useState("");
  // const [enteredPhoto, setEnteredPhoto] = useState({
  //   image_file: "",
  //   preview_URL:
  //     "https://previews.123rf.com/images/alekseyvanin/alekseyvanin1803/alekseyvanin180300009/96588544-%EA%B2%8C%EC%9E%84-%ED%8F%B4%EB%8D%94-%EA%B0%9C%EC%9A%94-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EA%B0%9C%EB%85%90-%EB%B0%8F-%EC%9B%B9-%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%84%EC%9C%84%ED%95%9C-%EC%84%A0%ED%98%95-%EC%8A%A4%ED%83%80%EC%9D%BC-%EA%B8%B0%ED%98%B8-%EA%B2%8C%EC%9E%84-%ED%8C%A8%EB%93%9C-%EA%B0%84%EB%8B%A8%ED%95%9C-%EB%9D%BC%EC%9D%B8-%EB%B2%A1%ED%84%B0-%EC%95%84%EC%9D%B4%EC%BD%98-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8%EC%99%80-%ED%95%A8%EA%BB%98-%ED%8F%B4%EB%8D%94%EC%9E%85%EB%8B%88%EB%8B%A4-.jpg",
  // });
  const [enteredPhoto, setEnteredPhoto] = useState("");
  const [enteredExercise, setEnteredExercise] = useState("");
  const [enteredStory, setEnteredStory] = useState("");

  // let inputRef;

  //console.log(selectedDiary);

  // useEffect(() => {
  //   if (selectedDiary) {
  //     setEnteredDate(selectedDiary.date);
  //     setEnteredWeight(selectedDiary.weight);
  //     setEnteredPhoto(selectedDiary.photo);
  //     setEnteredExercise(selectedDiary.exercise);
  //     setEnteredStory(selectedDiary.story);
  //   }
  // }, [selectedDiary]);

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  };

  const weightChangeHandler = (event) => {
    setEnteredWeight(event.target.value);
    console.log(event.target.value);
  };

  const photoChangeHandler = (event) => {
    let fileInput = false;
    if (event.target.files[0]) {
      console.log(event.target.files[0]);
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          event.target.files[0],
          150,
          150,
          "png",
          90,
          0,
          (uri) => {
            console.log(uri);
            setEnteredPhoto(uri);
          },
          "base64",
          180,
          180
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  // const photoUploadHandler = async () => {
  //   if (enteredPhoto.image_file) {
  //     const formData = new FormData();
  //     formData.append("file", enteredPhoto.image_file);
  //     const photoData = await axios.post("/data", formData);
  //     console.log(photoData);
  //     alert("서버에 등록이 완료되었습니다. ");
  //     setEnteredPhoto({
  //       image_file: "",
  //       preview_URL:
  //         "https://previews.123rf.com/images/alekseyvanin/alekseyvanin1803/alekseyvanin180300009/96588544-%EA%B2%8C%EC%9E%84-%ED%8F%B4%EB%8D%94-%EA%B0%9C%EC%9A%94-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EA%B0%9C%EB%85%90-%EB%B0%8F-%EC%9B%B9-%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%84%EC%9C%84%ED%95%9C-%EC%84%A0%ED%98%95-%EC%8A%A4%ED%83%80%EC%9D%BC-%EA%B8%B0%ED%98%B8-%EA%B2%8C%EC%9E%84-%ED%8C%A8%EB%93%9C-%EA%B0%84%EB%8B%A8%ED%95%9C-%EB%9D%BC%EC%9D%B8-%EB%B2%A1%ED%84%B0-%EC%95%84%EC%9D%B4%EC%BD%98-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8%EC%99%80-%ED%95%A8%EA%BB%98-%ED%8F%B4%EB%8D%94%EC%9E%85%EB%8B%88%EB%8B%A4-.jpg",
  //     });
  //   } else {
  //     alert("사진을 등록하세요.");
  //   }
  // };

  // const photoChangeHandler = (event) => {
  //   event.preventDefault();
  //   if (event.target.files[0]) {
  //     URL.revokeObjectURL(enteredPhoto.preview_URL);
  //     const preview_URL = URL.createObjectURL(event.target.files[0]);
  //     setEnteredPhoto(() => ({
  //       image_file: event.target.files[0],
  //       preview_URL: preview_URL,
  //     }));
  //   }
  // };

  // const sendImageToServer = async () => {
  //   if (enteredPhoto.image_file) {
  //     const formData = new FormData();
  //     formData.append("file", enteredPhoto.image_file);
  //     await axios.post("/data", formData);
  //     setEnteredPhoto({
  //       image_file: "",
  //       preview_URL:
  //         "https://previews.123rf.com/images/alekseyvanin/alekseyvanin1803/alekseyvanin180300009/96588544-%EA%B2%8C%EC%9E%84-%ED%8F%B4%EB%8D%94-%EA%B0%9C%EC%9A%94-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EA%B0%9C%EB%85%90-%EB%B0%8F-%EC%9B%B9-%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%84%EC%9C%84%ED%95%9C-%EC%84%A0%ED%98%95-%EC%8A%A4%ED%83%80%EC%9D%BC-%EA%B8%B0%ED%98%B8-%EA%B2%8C%EC%9E%84-%ED%8C%A8%EB%93%9C-%EA%B0%84%EB%8B%A8%ED%95%9C-%EB%9D%BC%EC%9D%B8-%EB%B2%A1%ED%84%B0-%EC%95%84%EC%9D%B4%EC%BD%98-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8%EC%99%80-%ED%95%A8%EA%BB%98-%ED%8F%B4%EB%8D%94%EC%9E%85%EB%8B%88%EB%8B%A4-.jpg",
  //     });
  //   }
  // };

  const exerciseChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredExercise(event.target.value);
  };

  const storyChangeHandler = (event) => {
    setEnteredStory(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (enteredStory.trim().length === 0) {
      return;
    }

    const inputData = {
      date: new Date(enteredDate),
      weight: enteredWeight,
      photo: enteredPhoto,
      exercise: enteredExercise,
      story: enteredStory,
    };
    // props.onAddDiaries(inputData);
    // console.log(inputData);

    const response = await axios.post("/data", inputData);

    // console.log(response);
    // console.log(response.data);
    props.setData(response.data);

    // navigate("/");

    // window.location.reload();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          {/* <label>오늘도 해피데이</label> */}
          <div className='bigbox'>
            <label>날짜</label>
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
            {/* <input type='file' accept='image/*' onChange={photoChangeHandler} />
            <img src={enteredPhoto.preview_URL} /> */}
            <input
              type='file'
              // accept='image/png, image/jpeg'
              // value={enteredPhoto}
              onChange={photoChangeHandler}
            />
            <span>
              <img src={enteredPhoto} alt='' />
            </span>

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
            <button type='submit' id='submit'>
              게시글 올리기
            </button>
            {/* <button onClick={sendImageToServer}>사진 올리기</button> */}
          </div>
        </div>
      </div>
    </form>
  );
};

export default DiaryForm;
