import './search.css'
// import Select from 'react-select'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faSearch} />

// const options = [
//   { value: 'cityName', label: 'cityName' },
//   { value: 'zipCode', label: 'zipCode' },
//   { value: 'latLong', label: 'latLong' }
// ]

const Search = ({
  // selectedOption, handleOption,
  city,
  setCity,
  getData
}) => {
  return (
    <div className='search-container'>
      {/* <Select
        className='select'
        value={selectedOption}
        onChange={handleOption(selectedOption)}
        options={options}
      /> */}

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
