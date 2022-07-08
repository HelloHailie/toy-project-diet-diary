import React from "react";
import "./NewDiary.css";
import DiaryForm from "./DiaryForm";

const NewDiary = ({ setData }) => {
  return (
    <>
      <DiaryForm setData={setData}></DiaryForm>
    </>
  );
};
export default NewDiary;
