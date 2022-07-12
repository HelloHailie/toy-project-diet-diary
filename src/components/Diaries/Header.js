import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <span>
        <FontAwesomeIcon icon={faHouse} size='3x' />
      </span>
      <span id='name'>오늘도 맛있는 날!</span>
      <span>
        <FontAwesomeIcon icon={faChartLine} size='3x' />
        그래프
      </span>
    </header>
  );
}

export default Header;
