import { Card } from '../card/card'

import './card-list.css'

export const CardList = ({ weatherData, setLocation, setWeatherDay }) => (
  <div className='card-list'>
    {weatherData.list.slice(0, 5).map(weather => (
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
