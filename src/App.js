// import logo from './logo.svg';
import './App.css';
import { getWeatherData } from "./weatherCall";
import { useEffect, useState } from 'react';
function App() {
  const [weatherData, setWeatherData] = useState(" ");
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
  }

  return (

    <div className="row">
      <form className="col s12" onSubmit={(e) => { SubmitForm(e); setcityName(" "); }}>
        <div className="row">
          <div className="input-field col s6">
            <input type="text" onChange={(e) => { setcityName(e.target.value) }} />
            <label htmlFor="first_name" id="first_name" type="text" className="validate">City Name</label>
          </div>
        </div>
      </form>
    </div>

  );
}

export default App;
