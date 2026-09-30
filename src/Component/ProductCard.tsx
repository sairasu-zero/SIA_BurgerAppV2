import { useState } from 'react'
import './ProductCard.css'
import type { Product } from '../data/products'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product, quantity: number) => void
}

function StarRating({ rating }: { rating: number }) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<span key={i} className="star full">★</span>)
    } else if (i - rating === 0.5) {
      stars.push(<span key={i} className="star half">★</span>)
    } else {
      stars.push(<span key={i} className="star empty">★</span>)
    }
  }
  return <div className="star-rating">{stars}</div>
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [stock, setStock] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const handleIncrease = () => {
    setStock(stock + 1)
  }

  const handleDecrease = () => {
    if (stock > 0) {
      setStock(stock - 1)
    }
  }

  const handleAddToCart = () => {
    onAddToCart(product, stock)
    setStock(0)
    setIsOpen(false)
  }

  return (
    <>
      <div className="product-card" onClick={() => setIsOpen(true)}>
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h3>{product.name}</h3>
          <StarRating rating={product.rating} />
          <div className="product-price">৳{product.price}</div>
        </div>
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsOpen(false)}>
              ✕
            </button>
            <img
              className="modal-image"
              src={product.image}
              alt={product.name}
            />
            <h3>{product.name}</h3>
            <p>Description: {product.description}</p>
            <StarRating rating={product.rating} />
            <div className="product-price">৳{product.price}</div>
            <p>Stocks:</p>
            <div className="stock-counter">
              <button className="counter-button" onClick={handleIncrease}>+</button>
              <span className="stock-count">{stock}</span>
              <button className="counter-button" onClick={handleDecrease}>-</button>
            </div>
            <button
              className="add-to-cart-button"
              onClick={handleAddToCart}
              disabled={stock === 0}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductCard