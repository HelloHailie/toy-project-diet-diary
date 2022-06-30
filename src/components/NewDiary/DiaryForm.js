import React, { useState } from "react";
import "./DiaryForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DiaryForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [files, setFiles] = useState("");
  const onLoadFile = (e) => {
    const file = e.target.files;
    console.log(file);
    setFiles(file);
  };

  const handleClick = (e) => {
    const formdata = new FormData();
    formdata.append("uploadImage", files[0]);
  };

  return (
    <form>
      <div>
        <div>
          <label>오늘도 해피데이</label>
          <div className='bigbox'>
            <div>날짜</div>
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
            />
            <label>몸무게</label>
            <input type='number' min='0' max='150'></input>
            <label htmlFor='avatar'>식단 사진</label>
            <input
              type='file'
              id='avatar'
              name='avatar'
              accept='image/png, image/jpeg'
              onChange={onLoadFile}
            />
            <button onClick={handleClick}>저장하기</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DiaryForm;
