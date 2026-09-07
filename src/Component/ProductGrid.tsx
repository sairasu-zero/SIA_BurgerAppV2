import ProductCard from './ProductCard'
import { products } from '../data/products'
import './ProductGrid.css'

function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid