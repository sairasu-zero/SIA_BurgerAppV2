import './Burger.css'
import logo from '../assets/logo.png'
import ProductGrid from './ProductGrid'

function Burger() {
  return (
    <>
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
    <section className="hero">
        <h1>OUR CRAZY BURGERS</h1>
            <p>
                Get ready for a wild ride of flavors! Our crazy burgers are loaded with juicy
                patties, bold toppings, and irresistible sauces, all stacked on a perfectly toasted
                bun. Whether you like it cheesy, or extra meaty, we've got a burger that will blow
                your mind!
            </p>
    </section>
    <ProductGrid />
    </>
  )
}

export default Burger