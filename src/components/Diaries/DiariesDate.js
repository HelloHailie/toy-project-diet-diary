import React from "react";
import moment from "moment";

const DiariesDate = (date) => {
  const nowTime = moment(date.date).format("YYYY년MM월DD일");

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{nowTime}</div>
    </div>
  );
};

export default DiariesDate;
