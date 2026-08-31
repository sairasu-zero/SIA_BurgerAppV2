import './Burger.css'

function Burger() {
  return (
    <header className="navbar">
      <div className="logo">
        <span className="logo-text">TASTY BURGER</span>
      </div>
      <nav className="nav-links">
        <a href="#about">ABOUT</a>
        <a href="#menu">OUR MENU</a>
        <a href="#shop">SHOP</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <div className="cart-icon">
        🛒<span className="cart-count">2</span>
      </div>
    </header>
  )
}

export default Burger