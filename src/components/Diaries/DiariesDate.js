import React from "react";
import moment from "moment";

const DiariesDate = (date) => {
  // const month = date.date.toLocaleString("en-US", { month: "long" });
  // const day = date.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = date.date;

  const nowTime = moment(date.date).format("YYYY년MM월DD일");

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{nowTime}</div>
      {/* <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div> */}
    </div>
  );
};

export default DiariesDate;
