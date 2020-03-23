import React from 'react';

const DisplayWeather = ({ weatherData }) => {
    return (
        weatherData ? <div className="DisplayWeather">
            <h2 className="Weather-City">{weatherData.name} {weatherData.sys.country}</h2>
            <h1 className="Weather-Title">Current Conditions</h1>
            <div className="Main-Temp">{Math.round(weatherData.main.temp)} <span className="Main-Temp-Deg">{'\xB0'}</span>
                <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
            </div>

            <div className="High-Low-Temp">
                High: <span className='bold'>{Math.round(weatherData.main.temp_max)}</span>{'\xB0'}
                <br />
                Low: <span className='bold'>{Math.round(weatherData.main.temp_min)}</span>{'\xB0'}
            </div>

            <div>Feels like <span className='bold'>{Math.round(weatherData.main.feels_like)}{'\xB0'} </span></div>
            <div>Right now: <span className='bold'>{weatherData.weather[0].description}</span></div>
            <div>Wind Speed: <span className='bold'>{Math.round(weatherData.wind.speed)}</span> mph</div>
            <div>Humidity: <span className='bold'>{weatherData.main.humidity}</span>%</div>
        </div> : <div>"No Current Conditions Data"</div>
    );
}

export default DisplayWeather;