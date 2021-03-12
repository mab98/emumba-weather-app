import React, { useState } from 'react'
import './display.css'
const getDayName = dateStr => {
  var date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { weekday: 'long' })
}

const cToF = celsius => {
  let cTemp = celsius
  return ((cTemp * 9) / 5 + 32).toFixed(2)
}

const Display = ({ weatherData }) => {
  const [unit, setUnit] = useState('C')
  return (
    <div>
      {weatherData !== null ? (
        <div className='main-container'>
          <div className='container1'>
            <p className='location'>
              {weatherData.city.name}, {weatherData.city.country}
            </p>
            <p>{getDayName(weatherData.list[0].dt_txt.split(' ')[0])}</p>
            <p>{weatherData.list[0].weather[0].main}</p>
          </div>
          <div className='container2'>
            <img
              className='weather-icon'
              src={`https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`}
              alt='weather logo'
            />
            <p>
              <span className='temperature'>
                {unit === 'C'
                  ? weatherData.list[0].main.temp
                  : cToF(weatherData.list[0].main.temp)}
              </span>
            </p>

            <p className='temp-button'>
              &deg;<button onClick={() => setUnit('C')}>C</button> | &deg;
              <button onClick={() => setUnit('F')}>F</button>
            </p>
            <div className='container3'>
              <p>Pressure: {weatherData.list[0].main.pressure} hPa</p>
              <p>Humidity: {weatherData.list[0].main.humidity}%</p>
              <p>Wind Speed: {weatherData.list[0].wind.speed} m/s</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Display
