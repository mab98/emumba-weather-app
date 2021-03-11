import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

function App () {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  // const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?'
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?'
  const key = '3e476e4566d14c0ea211850072dcb2d9'

  const getData = async city => {
    try {
      const response = await axios.get(
        baseUrl + `q=${city}&units=metric&appid=${key}`
      )
      setWeatherData(response.data)
    } catch (error) {
      console.log('ERROR:', error.message)
    }
  }

  return (
    <div className='App'>
      <div className='card'>
        <h2 className='title'>Weather App</h2>
        <div className='search-form'>
          <input
            type='text'
            onChange={e => setCity(e.target.value)}
            placeholder='Enter city name'
          />
          <button type='button' onClick={() => getData(city)}>
            Search
          </button>
        </div>

        {weatherData !== null ? (
          <div className='main-container'>
            <div className='weather-icon'>
              <img
                src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt='weather logo'
              />
              <h3>{weatherData.weather[0].main}</h3>
            </div>
            <div className='temperature'>
              <h1>{weatherData.main.temp}&deg;C</h1>
            </div>
            <div className='location'>
              <h3>
                {weatherData.name} | {weatherData.sys.country}
              </h3>
            </div>
            <div className='temperature=-range'>
              <h6>
                Min: {weatherData.main.temp_min}&deg;C &nbsp;Max:{' '}
                {weatherData.main.temp_max}&deg;C &nbsp; Humidity:{' '}
                {weatherData.main.humidity}%{' '}
              </h6>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default App
