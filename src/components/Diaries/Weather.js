import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

import "./Weather.css";

const api = {
  key: "ff0819df29449fcc406320f56204c2dd",
};

const Weather = () => {
  const [city, setCity] = useState("Seoul");
  const [weather, setWeather] = useState("");
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState(0);

  function geoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api.key}&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCity(res.name);
        setWeather(res.weather[0].main);
        setIcon(res.weather[0].icon);
        setTemp(res.main.feels_like);
      });
  }
  function geoError() {
    alert("Can't find you :(");
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geoOk, geoError);
  }, []);

  const iconImg = "http://openweathermap.org/img/wn/" + icon + "@4x.png";

  // const dateBuilder = (d) => {
  //   let months = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];

  //   let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //   let day = days[d.getDay()];
  //   let date = d.getDate();
  //   let month = months[d.getMonth()];
  //   let year = d.getFullYear();
  //   return `${day} ${date} ${month} ${year}`;
  // };

  return (
    <main>
      <div className='location'>{city}</div>
      {/* <div className='date'>{dateBuilder(new Date())}</div> */}
      <div className='weather-box'>
        <div className='temp'>{weather}</div>
        <img className='weather_img' src={iconImg} />
      </div>
    </main>
  );
};

export default Weather;
