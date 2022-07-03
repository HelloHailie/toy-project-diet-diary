import React, { useState } from "react";
import DiariesItem from "./DiariesItem";
import "./Diaries.css";

const Diaries = (props) => {
  const [weight, setWeight] = useState(props.weight);

  return (
    <>
      <div className='diaries'>
        {props.items.map((item) => (
          <DiariesItem key={item.id} id={item.id} />
        ))}
      </div>
    </>
  );
};

export default Diaries;
