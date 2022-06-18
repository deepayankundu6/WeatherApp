// import logo from './logo.svg';
import './App.css';
import { getWeatherData, getIcon } from "./weatherCall";
import { useEffect, useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null)
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
            <span className="card-title title">{cityName}</span>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
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
