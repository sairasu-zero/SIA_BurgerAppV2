import './Burger.css'
import logo from '../assets/logo.png'

function Burger() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Tasty Burger Logo" className="logo-img" />
      </div>
      <nav className="nav-links">
        <button className="nav-button">ABOUT</button>
        <button className="nav-button">OUR MENU</button>
        <button className="nav-button">SHOP</button>
        <button className="nav-button">CONTACT</button>
      </nav>
      <div className="cart-icon">
        🛒<span className="cart-count">2</span>
      </div>
    </header>
  )
}

export default Burger