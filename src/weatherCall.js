const APIKey = "b1ee6b0ab2f054e7a60a315e0f475813";
const domin = "https://api.openweathermap.org";

const getWeatherData = async (cityName, unit) => {
    console.log("Fetching weather for: ", cityName);
    const path = `/data/2.5/weather?q=${cityName.toLowerCase()}&appid=${APIKey}&units=${unit}`;
    let weatherData = await fetch(domin + path);
    weatherData = await weatherData.json();
    return weatherData;
}

const getIcon = async (icon) => {
    const url = `http://openweathermap.org/img/w`;
    let weatherIcon = await fetch(url + `/${icon}.png`);
    weatherIcon = await weatherIcon.blob();
    weatherIcon = URL.createObjectURL(weatherIcon);
    return weatherIcon;
}
export { getWeatherData, getIcon };