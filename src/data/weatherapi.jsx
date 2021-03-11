import axios from 'axios'

// const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?'
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?'
const key = '3e476e4566d14c0ea211850072dcb2d9'

const getWeatherData = async cityName => {
  try {
    const response = await axios.get(
      baseUrl + `q=${cityName}&units=metric&appid=${key}`
    )
    const { data } = response
    return data
  } catch (error) {
    throw error
  }
}

export default getWeatherData
