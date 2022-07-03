import React from "react";

import "./DiariesList.css";
import DiariesItem from "./DiariesItem";

const DiariesList = (props) => {
  return (
    <ul>
      {props.items.map((icon) => (
        <>{icon.story}</>
      ))}
    </ul>
  );
};

export default DiariesList;
