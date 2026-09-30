import { useState } from 'react'
import ProductCard from './ProductCard'
import { products } from '../data/products'
import type { Product } from '../data/products'
import './ProductGrid.css'

const INITIAL_VISIBLE = 8

interface ProductGridProps {
  onAddToCart: (product: Product, quantity: number) => void
}

function ProductGrid({ onAddToCart }: ProductGridProps) {
  const [showAll, setShowAll] = useState(false)

  const visibleProducts = showAll
    ? products
    : products.slice(0, INITIAL_VISIBLE)

  return (
    <div className="product-grid-wrapper">
      <div className="product-grid">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {!showAll && products.length > INITIAL_VISIBLE && (
        <button className="view-more-button" onClick={() => setShowAll(true)}>
          View More
        </button>
      )}
    </div>
  )
}

export default ProductGrid