// Search by(selected), City Name, City Id, Zip Code
import './search.css'
import React, { useState } from 'react'
import NativeSelect from '@material-ui/core/NativeSelect'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faSearch} />

const Search = ({ city, setCity, getData }) => {
  const [option, setOption] = useState('')

  const handleChange = event => {
    setOption(event.target.value)
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
