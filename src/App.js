import axios from 'axios'
import React, { useState } from 'react'

import './App.css'

import Header from './components/header/header'
import Search from './components/search/search'
import Display from './components/display/display'

const App = () => {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)

  // const [selectedOption, setSelectedOption] = useState(null)
  // const handleOption = async selectedOption => {
  //   setSelectedOption(selectedOption)
  // }

  const getData = async city => {
    const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?'
    const key = '3e476e4566d14c0ea211850072dcb2d9'
    try {
      const response = await axios.get(
        baseUrl + `q=${city}&units=metric&appid=${key}`
      )
      console.log(response.data)
      setWeatherData(response.data)
    } catch (error) {
      console.log('ERROR:', error.message)
    }
  }

  return (
    <div>
      <Header text='Weather Forecast (5 days)' />
      <main>
        <Search
          // selectedOption={selectedOption}
          // handleOption={handleOption}
          city={city}
          setCity={setCity}
          getData={getData}
        />
        <Display weatherData={weatherData} />
      </main>
    </div>
  )
}

export default App
