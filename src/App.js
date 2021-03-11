import React, { useState, useEffect } from 'react'
import './App.css'
import getWeatherData from './data/weatherapi'

function App () {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState({})

  const getData = async () => {
    try {
      const data = await getWeatherData(city)
      setWeatherData(data)
      console.log(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

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
          <button type='button' onClick={() => getData()}>
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
                Min: {weatherData.main.temp_min}&deg;C || Max:{' '}
                {weatherData.main.temp_max}&deg;C || Humidity:{' '}
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
