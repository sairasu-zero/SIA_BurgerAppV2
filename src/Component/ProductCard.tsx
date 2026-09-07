import { useState } from 'react'
import './ProductCard.css'
import type { Product } from '../data/products'

interface ProductCardProps {
  product: Product
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

function ProductCard({ product }: ProductCardProps) {
  const [stock, setStock] = useState(0)

  const handleIncrease = () => {
    setStock(stock + 1)
  }

  const handleDecrease = () => {
    if (stock > 0) {
      setStock(stock - 1)
    }
  }

  return (
    <div className="product-card">
      <div className="product-image">
         <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>Description: {product.description}</p>
        <StarRating rating={product.rating} />
        <p>Stocks:</p>
        <div className="stock-counter">
          <button className="counter-button" onClick={handleIncrease}>+</button>
          <span className="stock-count">{stock}</span>
          <button className="counter-button" onClick={handleDecrease}>-</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard