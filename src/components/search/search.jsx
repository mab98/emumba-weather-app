import './search.css'
import React, { useState } from 'react'
import axios from 'axios'
import NativeSelect from '@material-ui/core/NativeSelect'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faSearch} />

const Search = ({ city, setCity, setWeatherData }) => {
  const [option, setOption] = useState('')

  const handleChange = event => {
    setOption(event.target.value)
  }

  const getData = async city => {
    const key = '3e476e4566d14c0ea211850072dcb2d9'
    const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?'
    let route = ''
    if (option === 'cityName') {
      route = `q=${city}&units=metric&appid=${key}`
    } else if (option === 'cityId') {
      route = `id=${city}&units=metric&appid=${key}`
    } else if (option === 'zipCode') {
      route = `zip=${city}&units=metric&appid=${key}`
    }
    try {
      const response = await axios.get(baseUrl + route)
      console.log(response.data)
      setWeatherData(response.data)
    } catch (error) {
      console.log('ERROR:', error.message)
    }
  }

  return (
    <div className='search-container'>
      <NativeSelect
        className='search-by'
        value={option}
        onChange={handleChange}
      >
        <option value='' disabled>
          Search by
        </option>
        <option value='cityName'>City Name</option>
        <option value='cityId'>City Id</option>
        <option value='zipCode'>Zip Code</option>
      </NativeSelect>

      <input
        type='text'
        onChange={e => setCity(e.target.value)}
        placeholder='Search term...'
      />

      <button
        type='button'
        className='submit-btn'
        onClick={() => getData(city)}
      >
        {element}
      </button>
    </div>
  )
}

export default Search
