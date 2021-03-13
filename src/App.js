import React, { useState } from 'react'

import './App.css'

import { Header } from './components/header/header'
import { Search } from './components/search/search'
import { Display } from './components/display/display'
import { CardList } from './components/card-list/card-list'

const App = () => {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)

  const [location, setLocation] = useState(null)
  const [weatherDay, setWeatherDay] = useState(null)

  return (
    <div>
      <Header text='Weather Forecast (5 days)' />
      <main>
        <Search city={city} setCity={setCity} setWeatherData={setWeatherData} />
        {location !== null && weatherDay !== null ? (
          <Display location={location} weatherDay={weatherDay} />
        ) : null}
        {weatherData !== null ? (
          <CardList
            weatherData={weatherData}
            setLocation={setLocation}
            setWeatherDay={setWeatherDay}
          />
        ) : null}
      </main>
    </div>
  )
}

export default App
