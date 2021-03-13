import { Card } from '../card/card'

import './card-list.css'

export const CardList = ({ weatherData, setLocation, setWeatherDay }) => (
  <div className='card-list'>
    {weatherData.list
      .reduce((acc, element) => {
        if (element.dt_txt.includes('12:00:00')) {
          acc.push(element)
        }
        return acc
      }, [])
      .map(weather => (
        <Card
          key={weather.dt}
          weather={weather}
          weatherData={weatherData}
          setLocation={setLocation}
          setWeatherDay={setWeatherDay}
        />
      ))}
  </div>
)
