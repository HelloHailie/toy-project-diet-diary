import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

import Weather from "./Weather";

import "./Header.css";

function Header() {
  return (
    <header className='Header'>
      <span className='side'>
        <FontAwesomeIcon icon={faHouse} size='5x' />
      </span>
      <span className='title'>오늘도 해피해피</span>
      <span className='side'>
        <Weather />
      </span>
      {/* <span className='side'>
        <FontAwesomeIcon icon={faChartLine} size='3x' />
      </span> */}
    </header>
  );
}

export default Header;
