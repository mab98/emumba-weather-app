import './header.css'
const Header = ({ text }) => {
  return (
    <div>
      <h3 className='heading'>{text}</h3>
    </div>
  )
}

export default Header
