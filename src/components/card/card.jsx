import './card.css'
const Card = () => {
  return (
    <div className='card-container'>
      <p>Friday</p>
      <img
        src='http://openweathermap.org/img/wn/01d@2x.png'
        alt='weather_icon'
      />
      <p>26 28</p>
    </div>
  )
}

export default Card
