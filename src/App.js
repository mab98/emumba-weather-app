import React, { useState } from 'react'

import './App.css'

import Header from './components/header/header'
import Search from './components/search/search'
import Display from './components/display/display'
import Card from './components/card/card'

const App = () => {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)

  return (
    <div>
      <Header text='Weather Forecast (5 days)' />
      <main>
        <Search city={city} setCity={setCity} setWeatherData={setWeatherData} />
        <Display weatherData={weatherData} />
        <div className='cards-container'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  )
}

export default App
