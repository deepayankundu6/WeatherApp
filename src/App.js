// import logo from './logo.svg';
import './App.css';
import { getWeatherData, getIcon } from "./weatherCall";
import { useEffect, useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [City, setCity] = useState(null);
  const [cityName, setcityName] = useState(" ");
  useEffect(() => {
    // async function fetchData() {
    //   ApiResponse = await getWeatherData(cityName);
    // }
    // fetchData();
  });

  const SubmitForm = (event) => {
    event.preventDefault();
    fetchData(event.target[0].value);

  }
  const fetchData = async (cityName) => {
    let ApiResponse = await getWeatherData(cityName);
    setWeatherData(ApiResponse);
    const icon = await getIcon(ApiResponse.weather[0].icon);
    setWeatherIcon(icon);
    setCity(cityName);
  }

  return (
    <div>
      <div className="row">
        <form className="col s12" onSubmit={(e) => { SubmitForm(e); }}>
          <div className="row">
            <div className="input-field col s6 center">
              <input type="text" onChange={(e) => { setcityName(e.target.value) }} />
              <label htmlFor="first_name" id="first_name" type="text" className="validate"><i className="fa-solid fa-magnifying-glass"></i>  City Name</label>
            </div>
          </div>
        </form>
      </div>

      {weatherData && < div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image image">
              <img src={weatherIcon} />
            </div>
            <span className="card-title title">{weatherData.name},{weatherData.sys.country}</span>
            <div className="card-content">
              <p>Temperature: {weatherData.main.temp}</p>
              <p>Feels Like: {weatherData.main.feels_like}</p>
              <p>Pressure: {weatherData.main.pressure}</p>
              <p>Humidity: {weatherData.main.humidity}</p>
              <p>Visibility: {weatherData.visibility}</p>
            </div>
            <div className="card-action">
            </div>
          </div>
        </div>
      </div>}
    </div>


  );
}

export default App;
