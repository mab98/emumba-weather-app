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

export const Display = ({ location, weatherDay }) => {
  const [unit, setUnit] = useState('C')
  return (
    <div className='main-container'>
      <div className='container1'>
        <p className='location'>{location}</p>
        <p>{getDayName(weatherDay.dt_txt.split(' ')[0])}</p>
        <p>{weatherDay.weather[0].main}</p>
      </div>
      <div className='container2'>
        <img
          className='weather-icon'
          src={`https://openweathermap.org/img/w/${weatherDay.weather[0].icon}.png`}
          alt='weather logo'
        />
        <p>
          <span className='temperature'>
            {unit === 'C' ? weatherDay.main.temp : cToF(weatherDay.main.temp)}
          </span>
        </p>

        <p className='temp-button'>
          &deg;
          <button id='temp-in-C' onClick={() => setUnit('C')}>
            {unit === 'C' ? (
              <span className='temp-selected'>C</span>
            ) : (
              <span>C</span>
            )}
          </button>{' '}
          | &deg;
          <button id='temp-in-F' onClick={() => setUnit('F')}>
            {unit === 'F' ? (
              <span className='temp-selected'>F</span>
            ) : (
              <span>F</span>
            )}
          </button>
        </p>
        <div className='container3'>
          <p>Pressure: {weatherDay.main.pressure} hPa</p>
          <p>Humidity: {weatherDay.main.humidity}%</p>
          <p>Wind Speed: {weatherDay.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  )
}
