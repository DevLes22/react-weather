import logo from './logo.svg';
import './App.css';
import axios from "axios";

export default function Weather() {

  function handleResponse(response) {
alert(`The weather is ${response.data.main.temp}`);
  }

    let apiKey = `4e3399058fb83764b1a548f8be443cf5`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

  return <h1>My React App</h1>;
}