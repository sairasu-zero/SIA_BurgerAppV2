import { useEffect, useState } from 'react'
import { ArrowUpRight, Minus, Plus, ShoppingBag, X } from 'lucide-react'
import type { Product } from '../data/products'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product, quantity: number) => void
  index: number
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1
        const isHalf = rating >= starValue - 0.5 && rating < starValue
        const isFull = rating >= starValue

        return (
          <span
            key={starValue}
            aria-hidden="true"
            className={`text-sm leading-none ${isHalf ? 'bg-[linear-gradient(90deg,#e6a63d_50%,#d7d8ce_50%)] bg-clip-text text-transparent' : isFull ? 'text-[#e6a63d]' : 'text-[#d7d8ce]'}`}
          >
            ★
          </span>
        )
      })}
    </span>
  )
}

function ProductCard({ product, onAddToCart, index }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  const handleAddToCart = () => {
    onAddToCart(product, quantity)
    setQuantity(1)
    setIsOpen(false)
  }

  return (
    <>
      <article className="group overflow-hidden rounded-[4px] border border-[#18342d]/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(24,52,45,0.42)]">
        <button type="button" onClick={() => setIsOpen(true)} className="relative block aspect-[1.18] w-full overflow-hidden bg-[#e9eee4] text-left" aria-label={`Customize ${product.name}`}>
          <img src={product.image} alt={product.name} className="size-full object-cover transition duration-500 group-hover:scale-[1.04]" />
          <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-[#f8f5ec] px-2.5 py-1.5 text-[11px] font-bold text-[#18342d]">
            <span className="text-[#e6a63d]" aria-hidden="true">★</span> {product.rating.toFixed(1)}
          </span>
          <span className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full bg-[#f2bd4d] text-[#18342d] transition group-hover:bg-[#ef5948] group-hover:text-white">
            <ArrowUpRight size={18} />
          </span>
        </button>
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="mb-1 text-[10px] font-extrabold tracking-[0.14em] text-[#e05240]">SIGNATURE {String(index + 1).padStart(2, '0')}</p>
              <h3 className="font-display text-[1.55rem] leading-tight tracking-[-0.02em] text-[#18342d]">{product.name}</h3>
            </div>
            <span className="shrink-0 rounded-[3px] bg-[#e9eee4] px-2.5 py-1.5 text-sm font-extrabold text-[#18342d]">৳{product.price}</span>
          </div>
          <p className="mt-3 line-clamp-2 min-h-10 text-xs leading-5 text-[#18342d]/60">{product.description}</p>
          <div className="mt-4 flex items-center justify-between border-t border-[#18342d]/10 pt-3">
            <span className="text-xs font-semibold text-[#18342d]/55">{product.rating.toFixed(1)} rating</span>
            <button type="button" onClick={() => setIsOpen(true)} className="inline-flex items-center gap-2 text-xs font-extrabold text-[#18342d] transition hover:text-[#e05240]">
              Customize <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </article>

      {isOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#10231f]/75 p-4 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <section role="dialog" aria-modal="true" aria-labelledby={`product-title-${product.id}`} className="relative grid max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[4px] bg-[#f8f5ec] shadow-2xl md:grid-cols-2" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-[#f8f5ec] text-[#18342d] shadow transition hover:bg-[#ef5948] hover:text-white" onClick={() => setIsOpen(false)} aria-label="Close product details">
              <X size={19} />
            </button>
            <div className="min-h-64 bg-[#e9eee4] md:min-h-full">
              <img src={product.image} alt={product.name} className="h-full max-h-80 w-full object-cover md:max-h-full" />
            </div>
            <div className="flex flex-col p-6 sm:p-8">
              <p className="text-[10px] font-extrabold tracking-[0.18em] text-[#e05240]">SIGNATURE {String(index + 1).padStart(2, '0')}</p>
              <h2 id={`product-title-${product.id}`} className="mt-2 font-display text-4xl leading-none tracking-[-0.03em] text-[#18342d]">{product.name}</h2>
              <div className="mt-4 flex items-center gap-2">
                <StarRating rating={product.rating} />
                <span className="text-xs font-semibold text-[#18342d]/60">{product.rating.toFixed(1)} / 5</span>
              </div>
              <p className="mt-5 text-sm leading-6 text-[#18342d]/70">{product.description}</p>
              <div className="mt-6 flex items-center justify-between border-y border-[#18342d]/10 py-4">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#18342d]/60">Price</span>
                <span className="font-display text-2xl font-bold text-[#18342d]">৳{product.price.toFixed(2)}</span>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-bold text-[#18342d]">Quantity</span>
                <div className="flex items-center gap-4">
                  <button type="button" className="grid size-9 place-items-center rounded-full border border-[#18342d]/20 transition hover:bg-white" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">
                    <Minus size={15} />
                  </button>
                  <span className="min-w-5 text-center text-sm font-extrabold tabular-nums">{quantity}</span>
                  <button type="button" className="grid size-9 place-items-center rounded-full border border-[#18342d]/20 transition hover:bg-white" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity">
                    <Plus size={15} />
                  </button>
                </div>
              </div>
              <button type="button" onClick={handleAddToCart} className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] bg-[#18342d] px-4 py-3 font-bold text-white transition hover:bg-[#ef5948] md:mt-7">
                <ShoppingBag size={17} /> Add {quantity} to cart <span className="ml-auto">৳{(product.price * quantity).toFixed(2)}</span>
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default ProductCard