import React, { useState } from "react";
import axios from "axios";
import Location from "./Location";
import "./Weather.css";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `4e3399058fb83764b1a548f8be443cf5`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  function showWeather(response) {
    setTemperature(`${Math.round(response.data.main.temp)}`);
    setDescription(`${response.data.weather[0].description}`);
    setHumidity(`${response.data.main.humidity}`);
    setWind(`${Math.round(response.data.wind.speed)}`);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  return (
    <div>
      <div className="search-container">
        <form
          className="search-engine"
          id="search-engine-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            id="search-engine-input"
            placeholder="Enter your city ..."
            autofocus="on"
            autocomplete="off"
            onChange={changeCity}
          />
          <button type="submit" value="none" id="search-button">
            Search
          </button>
        </form>
        <Location />
      </div>
      <div class="main-container">
        <div class="row">
          <div class="col-3">
            <ul>
              <div>
                <li class="current-city">{city}</li>
              </div>
              <div>
                <li class="current-day">Date</li>
              </div>
            </ul>
          </div>
          <div class="col-3">
            <div class="col-3 current-temperature">{temperature}°</div>
          </div>
          <div class="col-3">
            <div class="col-3">
              <img src={icon} alt={description} id="icon" />
            </div>
          </div>
          <div class="col-3">
            <div class="parameters">
              <ul>
                <li className="description"> {description} </li>
                <li>Humidity: {humidity}%</li>
                <li>Wind: {wind}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
