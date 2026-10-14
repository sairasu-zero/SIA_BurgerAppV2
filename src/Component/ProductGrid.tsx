import ProductCard from './ProductCard'
import { products } from '../data/products'
import type { Product } from '../data/products'

interface ProductGridProps {
  onAddToCart: (product: Product, quantity: number) => void
}

function ProductGrid({ onAddToCart }: ProductGridProps) {
  return (
    <section id="menu" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-[11px] font-extrabold tracking-[0.2em] text-[#e05240]">THE LINEUP</p>
          <h2 className="font-display text-4xl leading-none tracking-[-0.03em] text-[#18342d] sm:text-5xl">Meet your new regular.</h2>
        </div>
        <p className="max-w-xs text-sm leading-6 text-[#18342d]/65">Four big personalities. Pick one, make it yours, and get straight to the good part.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductGrid