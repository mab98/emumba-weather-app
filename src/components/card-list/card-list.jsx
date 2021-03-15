import './card-list.css'
import { Card } from '../card/card'
import React, { useState } from 'react'

export const CardList = ({
  weatherData,
  setLocation,
  setWeatherDay,
  selected,
  setSelected
}) => {
  // const [index, setIndex] = useState(0)

  return (
    <div className='card-list'>
      {weatherData.list
        .reduce((acc, element) => {
          if (element.dt_txt.includes('12:00:00')) {
            acc.push(element)
          }
          return acc
        }, [])
        .map((weather, i) => (
          <Card
            key={weather.dt}
            weather={weather}
            weatherData={weatherData}
            setLocation={setLocation}
            setWeatherDay={setWeatherDay}
            index={i}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
    </div>
  )
}
