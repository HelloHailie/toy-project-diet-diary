import React from "react";
import DiaryForm from "./DiaryForm";

const NewDiary = ({ setData, selectedDiary }) => {
  return (
    <>
      <DiaryForm setData={setData} selectedDiary={selectedDiary}></DiaryForm>
    </>
  );
};
export default NewDiary;
