import './card.css'

const getDayName = dateStr => {
  var date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { weekday: 'long' })
}

export const Card = ({
  weather,
  weatherData,
  setLocation,
  setWeatherDay,
  index,
  selected,
  setSelected
}) => {
  return (
    <>
      {selected === index ? (
        <div
          className='card-container card-selected'
          onClick={() => {
            setLocation(`${weatherData.city.name}, ${weatherData.city.country}`)
            setWeatherDay(weather)
            setSelected(index)
          }}
        >
          <p>{getDayName(weather.dt_txt)}</p>
          <img
            className='card-img'
            src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt='weather_icon'
          />
          <p>
            {weather.main.temp_min.toFixed(0)}&deg;{' '}
            {weather.main.temp_max.toFixed(0)}&deg;
          </p>
        </div>
      ) : (
        <div
          className='card-container'
          onClick={() => {
            setLocation(`${weatherData.city.name}, ${weatherData.city.country}`)
            setWeatherDay(weather)
            setSelected(index)
          }}
        >
          <p>{getDayName(weather.dt_txt)}</p>
          <img
            className='card-img'
            src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt='weather_icon'
          />
          <p>
            {weather.main.temp_min.toFixed(0)}&deg;{' '}
            {weather.main.temp_max.toFixed(0)}&deg;
          </p>
        </div>
      )}
    </>
  )
}
