import { useState } from 'react'
import './Burger.css'
import logo from '../assets/logo.png'
import ProductGrid from './ProductGrid'
import CartModal from './CartModal'
import type { Product } from '../data/products'
import type { CartItem } from '../data/cart'

function Burger() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product: Product, quantity: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id)

      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [...prevCart, { product, quantity }]
    })
  }

 const cartCount = cart.length

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
        <div className="cart-icon" onClick={() => setIsCartOpen(true)}>
          🛒<span className="cart-count">{cartCount}</span>
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

      <ProductGrid onAddToCart={addToCart} />

      {isCartOpen && (
        <CartModal cart={cart} onClose={() => setIsCartOpen(false)} />
      )}
    </>
  )
}

export default Burger